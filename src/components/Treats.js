import React from 'react';
import Header from './Header';  // Importing the Header component
import './Treats.css';

const Treats = () => {
  return (
    <div className="treats-container">
      <Header /> {/* Header with logo and dropdown */}

      <h1 className="treats-title">Treats</h1>
      
      <ul className="treats-menu">
        <li><strong>Mallow Melt Cookies:</strong> (3 cookies) <span className="price">$4.29</span></li>
        <li><strong>Mini Pretzel Bites:</strong> Cup of 5 <span className="price">$3.99</span></li>
        <li><strong>Cake Pops:</strong> Cup of 3 <span className="price">$4.09</span></li>
      </ul>

      <div className="contact-section">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-email">For any inquiries or special treat requests, contact us at: <span className="email">floatprovo@gmail.com</span></p>
      </div>
    </div>
  );
}

export default Treats;
