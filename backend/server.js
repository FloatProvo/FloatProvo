require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Setup Nodemailer transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
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
    to: process.env.EMAIL, // Email will be sent to your own email
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
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Catering request submitted successfully!');
    }
  });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
