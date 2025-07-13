import mongoose from 'mongoose';

const analyticsSchema = new mongoose.Schema({
  page: {
    type: String,
    required: true,
    trim: true
  },
  userAgent: {
    type: String,
    default: null
  },
  ipAddress: {
    type: String,
    default: null
  },
  referrer: {
    type: String,
    default: null
  },
  sessionId: {
    type: String,
    default: null
  },
  duration: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

// Index for better query performance
analyticsSchema.index({ page: 1, createdAt: -1 });
analyticsSchema.index({ createdAt: -1 });

export default mongoose.model('Analytics', analyticsSchema);