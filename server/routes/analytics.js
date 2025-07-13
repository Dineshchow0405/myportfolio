import express from 'express';
import Analytics from '../models/Analytics.js';

const router = express.Router();

// In-memory storage for when MongoDB is not available
let inMemoryAnalytics = [];

// Track page visit
router.post('/track', async (req, res) => {
  try {
    const { page, referrer, sessionId, duration } = req.body;

    if (!page) {
      return res.status(400).json({
        success: false,
        message: 'Page is required'
      });
    }

    const analyticsData = {
      page: page.trim(),
      userAgent: req.get('User-Agent'),
      ipAddress: req.ip || req.connection.remoteAddress,
      referrer: referrer || null,
      sessionId: sessionId || null,
      duration: duration || 0,
      createdAt: new Date()
    };

    if (req.isMongoConnected) {
      // Use MongoDB
      const analytics = new Analytics(analyticsData);
      await analytics.save();
    } else {
      // Use in-memory storage
      const analytics = {
        _id: Date.now().toString(),
        ...analyticsData,
        timestamp: new Date()
      };
      inMemoryAnalytics.push(analytics);
    }

    res.json({
      success: true,
      message: 'Page visit tracked successfully'
    });

  } catch (error) {
    console.error('Analytics tracking error:', error);
    res.status(500).json({
      success: false,
      message: 'Analytics tracking failed'
    });
  }
});

// Get analytics data
router.get('/', async (req, res) => {
  try {
    const { startDate, endDate, page } = req.query;

    if (req.isMongoConnected) {
      // Use MongoDB
      let query = {};
      
      if (startDate || endDate) {
        query.createdAt = {};
        if (startDate) query.createdAt.$gte = new Date(startDate);
        if (endDate) query.createdAt.$lte = new Date(endDate);
      }
      
      if (page) {
        query.page = page;
      }

      // Page views by page
      const pageViews = await Analytics.aggregate([
        { $match: query },
        {
          $group: {
            _id: '$page',
            count: { $sum: 1 },
            lastVisit: { $max: '$createdAt' },
            avgDuration: { $avg: '$duration' }
          }
        },
        { $sort: { count: -1 } }
      ]);

      // Total visits
      const totalVisits = await Analytics.countDocuments(query);

      // Unique visitors (based on IP)
      const uniqueVisitors = await Analytics.distinct('ipAddress', query);

      // Daily visits for the last 30 days
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

      const dailyVisits = await Analytics.aggregate([
        {
          $match: {
            ...query,
            createdAt: { $gte: thirtyDaysAgo }
          }
        },
        {
          $group: {
            _id: {
              $dateToString: { format: '%Y-%m-%d', date: '$createdAt' }
            },
            count: { $sum: 1 }
          }
        },
        { $sort: { '_id': 1 } }
      ]);

      // Top referrers
      const topReferrers = await Analytics.aggregate([
        {
          $match: {
            ...query,
            referrer: { $ne: null, $ne: '' }
          }
        },
        {
          $group: {
            _id: '$referrer',
            count: { $sum: 1 }
          }
        },
        { $sort: { count: -1 } },
        { $limit: 10 }
      ]);

      res.json({
        success: true,
        data: {
          summary: {
            totalVisits,
            uniqueVisitors: uniqueVisitors.length,
            pageViews: pageViews.length
          },
          pageViews,
          dailyVisits,
          topReferrers
        }
      });
    } else {
      // Use in-memory storage
      let filteredAnalytics = inMemoryAnalytics;

      // Apply date filters
      if (startDate) {
        filteredAnalytics = filteredAnalytics.filter(entry => 
          new Date(entry.createdAt) >= new Date(startDate)
        );
      }
      if (endDate) {
        filteredAnalytics = filteredAnalytics.filter(entry => 
          new Date(entry.createdAt) <= new Date(endDate)
        );
      }
      if (page) {
        filteredAnalytics = filteredAnalytics.filter(entry => entry.page === page);
      }

      // Process page views
      const pageStats = {};
      filteredAnalytics.forEach(entry => {
        if (!pageStats[entry.page]) {
          pageStats[entry.page] = { 
            count: 0, 
            lastVisit: entry.createdAt,
            totalDuration: 0
          };
        }
        pageStats[entry.page].count++;
        pageStats[entry.page].totalDuration += entry.duration || 0;
        if (entry.createdAt > pageStats[entry.page].lastVisit) {
          pageStats[entry.page].lastVisit = entry.createdAt;
        }
      });

      const pageViews = Object.entries(pageStats).map(([page, stats]) => ({
        _id: page,
        count: stats.count,
        lastVisit: stats.lastVisit,
        avgDuration: stats.count > 0 ? stats.totalDuration / stats.count : 0
      })).sort((a, b) => b.count - a.count);

      // Calculate unique visitors
      const uniqueIPs = [...new Set(filteredAnalytics.map(entry => entry.ipAddress))];

      // Calculate daily visits for last 30 days
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      
      const recentAnalytics = filteredAnalytics.filter(entry => 
        new Date(entry.createdAt) >= thirtyDaysAgo
      );

      const dailyStats = {};
      recentAnalytics.forEach(entry => {
        const date = new Date(entry.createdAt).toISOString().split('T')[0];
        dailyStats[date] = (dailyStats[date] || 0) + 1;
      });

      const dailyVisits = Object.entries(dailyStats).map(([date, count]) => ({
        _id: date,
        count
      })).sort((a, b) => a._id.localeCompare(b._id));

      // Top referrers
      const referrerStats = {};
      filteredAnalytics.forEach(entry => {
        if (entry.referrer) {
          referrerStats[entry.referrer] = (referrerStats[entry.referrer] || 0) + 1;
        }
      });

      const topReferrers = Object.entries(referrerStats).map(([referrer, count]) => ({
        _id: referrer,
        count
      })).sort((a, b) => b.count - a.count).slice(0, 10);

      res.json({
        success: true,
        data: {
          summary: {
            totalVisits: filteredAnalytics.length,
            uniqueVisitors: uniqueIPs.length,
            pageViews: pageViews.length
          },
          pageViews,
          dailyVisits,
          topReferrers
        },
        note: 'Using in-memory storage - data will not persist'
      });
    }

  } catch (error) {
    console.error('Get analytics error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

export default router;