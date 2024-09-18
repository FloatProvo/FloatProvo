import React from 'react';
import Header from './Header';  // Importing the Header component
import './Freezes.css';  // Importing the CSS for Freezes

const Freezes = () => {
  return (
    <div className="freezes-container">
      <Header /> {/* Header with logo and dropdown */}
      
      <h1 className="freezes-title">Freezes</h1>
      <ul className="freeze-sizes">
        <li>16 oz - <span className="price">$5.99</span></li>
        <li>24 oz - <span className="price">$6.79</span></li>
      </ul>

      <p className="freeze-description">
        <span>Any Soda:</span> Any soda of your choice blended with our creamy vanilla ice cream to create the perfect Freeze experience. Customize with your favorite soda flavor!
      </p>

      <div className="contact-section">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-email">For custom options or inquiries, reach out to us at: <span className="email">floatprovo@gmail.com</span></p>
      </div>
    </div>
  );
}

export default Freezes;
