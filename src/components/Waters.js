import React from 'react';
import Header from './Header';  // Importing the Header component
import './Waters.css';

const Waters = () => {
  return (
    <div className="waters-container">
      <Header /> {/* Header with logo and dropdown */}

      <h1 className="waters-title">Signature Water Flavors</h1>
      <ul className="water-sizes">
        <li>16 oz - <span className="price">$2.29</span></li>
        <li>24 oz - <span className="price">$2.89</span></li>
        <li>32 oz - <span className="price">$3.49</span></li>
        <li>44 oz - <span className="price">$4.09</span></li>
      </ul>

    
      <ul className="flavor-list">
        <li><span className="highlight">Island Breeze</span>: Pinapple Chunks + Sugar free Pinapple + Sugar Free Coconut + Coconut Cream</li>
        <li><span className="highlight">Strawberry Splash</span>: Sugar Free Strawberry + Sugar Free Vanilla + Coconut Cream + Strawberry Pure</li>
        <li><span className="highlight">Sweet Peach</span>: Sugar Free Peach + Sugar Free Vanilla + Vanilla Cream</li>
        <li><span className="highlight">Citrus Chill</span>: Fresh Orange + Fresh Lemon + Fresh Lime</li>
        <li><span className="highlight">Cherry Zing</span>: Sugar Free Cherry + Fresh Lime</li>
      </ul>

      <div className="contact-section">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-email">For any inquiries or special water requests, contact us at: <span className="email">floatprovo@gmail.com</span></p>
      </div>
    </div>
  );
}

export default Waters;
