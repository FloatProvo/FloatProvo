import React, { useState } from 'react';
import Header from './Header';  // Importing the Header component
import './Catering.css';

const Catering = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    guests: '',
    details: ''
  });

  const [message, setMessage] = useState(null); // To show success or error messages
  const [isSuccess, setIsSuccess] = useState(false); // Track form submission success

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null); // Clear previous messages

    try {
      const response = await fetch('http://localhost:5001/api/catering', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSuccess(true);
        setMessage('Catering request submitted successfully!');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          location: '',
          guests: '',
          details: ''
        });
      } else {
        setIsSuccess(false);
        setMessage('Error submitting the catering request. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setIsSuccess(false);
      setMessage('Error submitting the catering request. Please try again.');
    }
  };

  return (
    <div className="catering-container">
      <Header /> {/* Header with logo and dropdown */}

      <h1 className="catering-title">Catering & Events</h1>
      <p className="catering-description">
        At <span className="highlight">Float</span>, we bring a luxury experience to every event, whether you are hosting an intimate celebration or a large-scale gathering. We create memories with our signature root beer floats and imaginative custom options. Our team ensures every detail is perfect.
      </p>
      <p className="catering-description">
        We offer a wide selection of floats, ranging from the timeless <span className="highlight">Classic Root Beer Float</span> to exciting choices like <span className="highlight">Cookies n Cream</span>, <span className="highlight">Strawberries and Cream</span>, and the beloved <span className="highlight">Cinnamon Churro</span>. Each float is designed to delight your guests and create lasting impressions.
      </p>
      <p className="catering-description">
        Each float is crafted with an individual bottle of premium root beer, providing the ideal fizz and froth for a refreshing treat. If you want to elevate your event further, ask about our personalized float creations that perfectly align with your event’s theme and aesthetic.
      </p>

      <h2 className="menu-title">Exclusive Catering Menu & Pricing</h2>
      <ul className="catering-menu">
        <li>50 Root Beer Floats - <span className="price">$600</span> (Two Float Options)</li>
        <li>100 Root Beer Floats - <span className="price">$1100</span> (Four Float Options)</li>
        <li>150 Root Beer Floats - <span className="price">$1600</span> (Four Float Options)</li>
        <li>200 Root Beer Floats - <span className="price">$2000</span> (Four Float Options)</li>
        <li>250 Root Beer Floats - <span className="price">$2400</span> (Four Float Options)</li>
        <li>300 Root Beer Floats - <span className="price">$2800</span> (Four Float Options)</li>
        <li>Additional 50 Floats - <span className="price">$350</span> (Four Float Options)</li>
      </ul>

      <p className="non-refundable-fee">Non-refundable service fee: <span className="fee">$300</span> </p>

      <div className="event-booking">
        <h2 className="booking-title">Book Your Dream Event Today</h2>
        <p className="booking-description">We can't wait to bring the magic of Float to your event! Fill out the form below, and our team will contact you to finalize the details.</p>
        <form className="event-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-input"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            className="form-input"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            className="form-input"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            className="form-input"
            name="location"
            placeholder="Event Location"
            value={formData.location}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            className="form-input"
            name="guests"
            placeholder="Number of Guests"
            value={formData.guests}
            onChange={handleChange}
            required
          />
          <textarea
            className="form-textarea"
            name="details"
            placeholder="Event Details or Special Requests"
            value={formData.details}
            onChange={handleChange}
            rows="6"
          />
          <button type="submit" className="submit-button">
            Submit Details
          </button>
        </form>

        {/* Success/Error message */}
        {message && (
          <p className={`form-message ${isSuccess ? 'success' : 'error'}`}>
            {message}
          </p>
        )}
      </div>

      <div className="contact-section">
        <h2 className="contact-title">Contact Us Anytime</h2>
        <p className="contact-email">For any questions, don't hesitate to reach out to us at: <span className="email">floatprovo@gmail.com</span></p>
      </div>
    </div>
  );
};

export default Catering;