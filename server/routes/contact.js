import express from 'express';
import Contact from '../models/Contact.js';

const router = express.Router();

// In-memory storage for when MongoDB is not available
let inMemoryContacts = [];

// Submit contact form
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    const contactData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      message: message.trim(),
      ipAddress: req.ip || req.connection.remoteAddress,
      userAgent: req.get('User-Agent'),
      createdAt: new Date()
    };

    if (req.isMongoConnected) {
      // Use MongoDB
      const contact = new Contact(contactData);
      await contact.save();
      
      res.status(201).json({
        success: true,
        message: 'Message sent successfully! I will get back to you soon.',
        data: {
          id: contact._id,
          name: contact.name,
          email: contact.email,
          subject: contact.subject,
          createdAt: contact.createdAt
        }
      });
    } else {
      // Use in-memory storage
      const contact = {
        _id: Date.now().toString(),
        ...contactData,
        status: 'new'
      };
      inMemoryContacts.push(contact);
      
      res.status(201).json({
        success: true,
        message: 'Message sent successfully! I will get back to you soon. (Note: Using temporary storage - data will not persist)',
        data: {
          id: contact._id,
          name: contact.name,
          email: contact.email,
          subject: contact.subject,
          createdAt: contact.createdAt
        }
      });
    }

  } catch (error) {
    console.error('Contact form error:', error);
    
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors
      });
    }

    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.'
    });
  }
});

// Get all contacts (admin only - you can add authentication later)
router.get('/', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const status = req.query.status;

    if (req.isMongoConnected) {
      // Use MongoDB
      const query = status ? { status } : {};
      const skip = (page - 1) * limit;

      const contacts = await Contact.find(query)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .select('-__v');

      const total = await Contact.countDocuments(query);

      res.json({
        success: true,
        data: {
          contacts,
          pagination: {
            current: page,
            pages: Math.ceil(total / limit),
            total,
            hasNext: page < Math.ceil(total / limit),
            hasPrev: page > 1
          }
        }
      });
    } else {
      // Use in-memory storage
      let filteredContacts = status 
        ? inMemoryContacts.filter(contact => contact.status === status)
        : inMemoryContacts;
      
      filteredContacts = filteredContacts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      
      const skip = (page - 1) * limit;
      const paginatedContacts = filteredContacts.slice(skip, skip + limit);
      const total = filteredContacts.length;

      res.json({
        success: true,
        data: {
          contacts: paginatedContacts,
          pagination: {
            current: page,
            pages: Math.ceil(total / limit),
            total,
            hasNext: page < Math.ceil(total / limit),
            hasPrev: page > 1
          }
        },
        note: 'Using in-memory storage - data will not persist'
      });
    }

  } catch (error) {
    console.error('Get contacts error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// Update contact status
router.patch('/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!['new', 'read', 'replied'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid status'
      });
    }

    if (req.isMongoConnected) {
      // Use MongoDB
      const contact = await Contact.findByIdAndUpdate(
        id,
        { status },
        { new: true, runValidators: true }
      );

      if (!contact) {
        return res.status(404).json({
          success: false,
          message: 'Contact not found'
        });
      }

      res.json({
        success: true,
        message: 'Status updated successfully',
        data: contact
      });
    } else {
      // Use in-memory storage
      const contactIndex = inMemoryContacts.findIndex(contact => contact._id === id);
      
      if (contactIndex === -1) {
        return res.status(404).json({
          success: false,
          message: 'Contact not found'
        });
      }

      inMemoryContacts[contactIndex].status = status;
      
      res.json({
        success: true,
        message: 'Status updated successfully (in-memory storage)',
        data: inMemoryContacts[contactIndex]
      });
    }

  } catch (error) {
    console.error('Update contact status error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

export default router;