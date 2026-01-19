const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const axios = require('axios');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());

app.use(helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'"],
        styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
        fontSrc: ["'self'", "https://fonts.gstatic.com"],
        imgSrc: ["'self'", "data:", "https:"],
        connectSrc: ["'self'", "https://api.github.com"]
    }
}));

const contactLimiter = rateLimit({
    windowMs: 60 * 60 * 1000,
    max: 3,
    message: { status: 'error', message: 'Too many messages sent from this IP, please try again after an hour' }
});

const generalLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: { status: 'error', message: 'Too many requests, please try again later' }
});

app.use(generalLimiter);
app.use(cors());
app.use(express.json({ limit: '10kb' }));

const messages = [];

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});

app.get('/', (req, res) => {
    res.send('Backend is running!');
});

app.get('/api/github/:username', async (req, res) => {
    try {
        const { username } = req.params;
        const response = await axios.get(`https://api.github.com/users/${username}/events/public`, {
            headers: { 'User-Agent': 'Portfolio-App' }
        });
        res.json(response.data);
    } catch (error) {
        console.error('GitHub API error:', error.message);
        res.status(500).json({ error: 'Failed to fetch GitHub activity' });
    }
});

app.get('/api/admin/messages', (req, res) => {
    res.json(messages);
});

app.post('/api/send_mail', contactLimiter, async (req, res) => {
    const { subject, sender, message, honeypot } = req.body;

    if (honeypot) {
        return res.json({ status: 'success', message: 'Email sent!' });
    }

    if (!sender || !message) {
        return res.status(400).json({
            status: 'error',
            message: 'Sender email and message are required'
        });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sender)) {
        return res.status(400).json({
            status: 'error',
            message: 'Invalid email address'
        });
    }

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
        subject: subject || 'Portfolio Contact Form',
        text: `From: ${sender}\n\n${message}`,
        replyTo: sender
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({ status: 'success', message: 'Email sent!' });
    } catch (error) {
        console.error('Email error:', error);
        res.status(500).json({
            status: 'error',
            message: 'Failed to send email. Please try again later.'
        });
    }
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ status: 'error', message: 'Something went wrong!' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
