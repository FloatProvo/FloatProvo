require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Setup Nodemailer transport
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || 'gmail', // Allow service to be configured
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

// Endpoint for handling catering form submissions
app.post('/api/catering', (req, res) => {
  const { fullName, email, phone, location, guests, details } = req.body;

  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL, // Send email to your own email
    subject: 'New Catering Request',
    text: `
      Full Name: ${fullName}
      Email: ${email}
      Phone: ${phone}
      Event Location: ${location}
      Number of Guests: ${guests}
      Event Details: ${details}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Error sending email', error });
    } else {
      console.log('Email sent:', info.response);
      return res.status(200).json({ message: 'Catering request submitted successfully!' });
    }
  });
});

// Basic health check endpoint (optional, but good for production monitoring)
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
