const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

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

// Send mail endpoint
app.post('/send_mail', async (req, res) => {
    const { subject, sender, message } = req.body;

    if (!sender || !message) {
        return res.status(400).json({
            status: 'error',
            message: 'Sender email and message are required'
        });
    }

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
