const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const axios = require('axios');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Rate limiting
const limiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 3, // Limit each IP to 3 requests per windowMs
    message: 'Too many messages sent from this IP, please try again after an hour'
});

// Middleware
app.use(cors());
app.use(express.json());

// In-memory store for messages (mock database)
const messages = [];

// Create Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});

// Health check endpoint
app.get('/', (req, res) => {
    res.send('Backend is running!');
});

// GitHub activity endpoint
app.get('/api/github/:username', async (req, res) => {
    try {
        const { username } = req.params;
        const response = await axios.get(`https://api.github.com/users/${username}/events/public`);
        res.json(response.data);
    } catch (error) {
        console.error('GitHub API error:', error.message);
        res.status(500).json({ error: 'Failed to fetch GitHub activity' });
    }
});

// Admin messages endpoint
app.get('/api/admin/messages', (req, res) => {
    res.json(messages);
});

// Send mail endpoint
app.post('/api/send_mail', limiter, async (req, res) => {
    const { subject, sender, message } = req.body;

    if (!sender || !message) {
        return res.status(400).json({
            status: 'error',
            message: 'Sender email and message are required'
        });
    }

    // Save message to "database"
    messages.push({
        id: Date.now(),
        sender,
        subject,
        message,
        timestamp: new Date()
    });

    const mailOptions = {
        from: process.env.MAIL_USER,
        to: process.env.RECIPIENT_EMAIL || process.env.MAIL_USER,
        subject: subject || 'No subject',
        text: message,
        replyTo: sender
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({ status: 'success', message: 'Email sent!' });
    } catch (error) {
        console.error('Email error:', error);
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
