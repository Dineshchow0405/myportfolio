import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import 'dotenv/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, '../src')));
app.use('/public', express.static(path.join(__dirname, '../public')));

// MongoDB connection with error handling
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio';

let isMongoConnected = false;

// In-memory storage as fallback when MongoDB is not available
let inMemoryContacts = [];
let inMemoryAnalytics = [];

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
})
.then(() => {
    console.log('✅ Connected to MongoDB');
    isMongoConnected = true;
})
.catch((error) => {
    console.warn('⚠️  MongoDB connection failed, using in-memory storage as fallback');
    console.warn('💡 To use MongoDB, please set up a MongoDB Atlas cluster or local MongoDB instance');
    console.warn('📖 See README.md for setup instructions');
    isMongoConnected = false;
});

// Portfolio Schema
const portfolioSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', portfolioSchema);

// Analytics Schema
const analyticsSchema = new mongoose.Schema({
    page: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
    userAgent: String,
    ip: String
});

const Analytics = mongoose.model('Analytics', analyticsSchema);

// API Routes

// Contact form submission
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        
        if (!name || !email || !message) {
            return res.status(400).json({ 
                success: false, 
                message: 'All fields are required' 
            });
        }

        if (isMongoConnected) {
            // Use MongoDB
            const contact = new Contact({ name, email, message });
            await contact.save();
        } else {
            // Use in-memory storage
            const contact = {
                _id: Date.now().toString(),
                name,
                email,
                message,
                createdAt: new Date()
            };
            inMemoryContacts.push(contact);
        }

        res.json({ 
            success: true, 
            message: 'Message sent successfully!' 
        });
    } catch (error) {
        console.error('Contact form error:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Server error. Please try again later.' 
        });
    }
});

// Get all contacts (admin only)
app.get('/api/contacts', async (req, res) => {
    try {
        let contacts;
        
        if (isMongoConnected) {
            contacts = await Contact.find().sort({ createdAt: -1 });
        } else {
            contacts = inMemoryContacts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        }
        
        res.json({ success: true, data: contacts });
    } catch (error) {
        console.error('Get contacts error:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Server error' 
        });
    }
});

// Analytics tracking
app.post('/api/analytics', async (req, res) => {
    try {
        const { page } = req.body;
        const userAgent = req.get('User-Agent');
        const ip = req.ip || req.connection.remoteAddress;

        if (isMongoConnected) {
            const analytics = new Analytics({ page, userAgent, ip });
            await analytics.save();
        } else {
            const analytics = {
                _id: Date.now().toString(),
                page,
                userAgent,
                ip,
                timestamp: new Date()
            };
            inMemoryAnalytics.push(analytics);
        }

        res.json({ success: true });
    } catch (error) {
        console.error('Analytics error:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Analytics tracking failed' 
        });
    }
});

// Get analytics data
app.get('/api/analytics', async (req, res) => {
    try {
        let analytics;
        
        if (isMongoConnected) {
            analytics = await Analytics.aggregate([
                {
                    $group: {
                        _id: '$page',
                        count: { $sum: 1 },
                        lastVisit: { $max: '$timestamp' }
                    }
                },
                { $sort: { count: -1 } }
            ]);
        } else {
            // Process in-memory analytics
            const pageStats = {};
            inMemoryAnalytics.forEach(entry => {
                if (!pageStats[entry.page]) {
                    pageStats[entry.page] = { count: 0, lastVisit: entry.timestamp };
                }
                pageStats[entry.page].count++;
                if (entry.timestamp > pageStats[entry.page].lastVisit) {
                    pageStats[entry.page].lastVisit = entry.timestamp;
                }
            });
            
            analytics = Object.entries(pageStats).map(([page, stats]) => ({
                _id: page,
                count: stats.count,
                lastVisit: stats.lastVisit
            })).sort((a, b) => b.count - a.count);
        }

        res.json({ success: true, data: analytics });
    } catch (error) {
        console.error('Get analytics error:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Server error' 
        });
    }
});

// Portfolio data API
app.get('/api/portfolio', (req, res) => {
    const portfolioData = {
        personal: {
            name: 'Reddy Dinesh Venkata Krishna',
            title: 'B.Tech Artificial Intelligence & Machine Learning Graduate',
            email: 'reddy.venkatakrishna@sasi.ac.in',
            phone: '+91 9052733927',
            location: 'Tadepalligudem, Andhra Pradesh, India',
            age: 20,
            github: 'https://github.com/Dineshchow0405',
            linkedin: 'https://www.linkedin.com/in/reddy-dinesh-venkata-krishna-b15758280'
        },
        technologies: {
            frontend: ['HTML', 'CSS', 'JavaScript'],
            backend: ['React', 'Node.js'],
            database: ['MongoDB'],
            framework: 'Express.js',
            tools: ['Git', 'VS Code', 'Postman']
        },
        stats: {
            projects: 6,
            internships: 3,
            achievements: 8,
            certificates: 12
        }
    };

    res.json({ success: true, data: portfolioData });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ 
        success: true, 
        message: 'Server is running',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        database: isMongoConnected ? 'MongoDB connected' : 'Using in-memory storage'
    });
});

// Serve the main HTML file for all routes (SPA support)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

// Error handling middleware
app.use((error, req, res, next) => {
    console.error('Server error:', error);
    res.status(500).json({ 
        success: false, 
        message: 'Internal server error' 
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ 
        success: false, 
        message: 'Route not found' 
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`🌐 Frontend: http://localhost:${PORT}`);
    console.log(`📡 API: http://localhost:${PORT}/api`);
    if (!isMongoConnected) {
        console.log(`💾 Database: In-memory storage (data will not persist)`);
        console.log(`💡 To enable persistent storage, connect to MongoDB Atlas`);
    }
});

// Graceful shutdown
process.on('SIGTERM', async () => {
    console.log('SIGTERM received. Shutting down gracefully...');
    if (isMongoConnected) {
        try {
            await mongoose.connection.close();
            console.log('MongoDB connection closed.');
        } catch (error) {
            console.error('Error closing MongoDB connection:', error);
        }
    }
    process.exit(0);
});

process.on('SIGINT', async () => {
    console.log('SIGINT received. Shutting down gracefully...');
    if (isMongoConnected) {
        try {
            await mongoose.connection.close();
            console.log('MongoDB connection closed.');
        } catch (error) {
            console.error('Error closing MongoDB connection:', error);
        }
    }
    process.exit(0);
});