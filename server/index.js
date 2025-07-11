const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const axios = require('axios');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('MongoDB connected'));

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now },
});
const Contact = mongoose.model('Contact', contactSchema);

// Health check
app.get('/', (req, res) => {
  res.send('Portfolio backend running');
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  try {
    // Save to DB
    const contact = new Contact({ name, email, message });
    await contact.save();
    // Send email (optional, configure below)
    if (process.env.SMTP_USER && process.env.SMTP_PASS && process.env.CONTACT_EMAIL) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });
      // Notify site owner
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.CONTACT_EMAIL,
        subject: 'New Portfolio Contact',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      });
      // Confirmation email to user
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: email,
        subject: 'Thank you for contacting me!',
        text: `Hi ${name},\n\nThank you for reaching out! I have received your message and will get back to you soon.\n\nBest regards,\n[Your Name]`,
      });
    }
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// GitHub activity endpoint
app.get('/api/github/:username', async (req, res) => {
  const { username } = req.params;
  try {
    const response = await axios.get(`https://api.github.com/users/${username}/events/public`);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch GitHub activity' });
  }
});

// Admin dashboard route (protected)
app.get('/api/admin/messages', (req, res) => {
  const token = req.headers['x-admin-token'];
  if (!process.env.ADMIN_TOKEN || token !== process.env.ADMIN_TOKEN) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  Contact.find().sort({ date: -1 }).then(messages => res.json(messages)).catch(() => res.status(500).json({ error: 'Failed to fetch messages' }));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 