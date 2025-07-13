import express from 'express';
import Analytics from '../models/Analytics.js';

const router = express.Router();

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

    const analytics = new Analytics({
      page: page.trim(),
      userAgent: req.get('User-Agent'),
      ipAddress: req.ip || req.connection.remoteAddress,
      referrer: referrer || null,
      sessionId: sessionId || null,
      duration: duration || 0
    });

    await analytics.save();

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

    // Build query
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

  } catch (error) {
    console.error('Get analytics error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

export default router;