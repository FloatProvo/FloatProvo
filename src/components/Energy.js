import React from 'react';
import Header from './Header';  // Importing the Header component
import './Energy.css';

const Energy = () => {
  return (
    <div className="energy-container">
      <Header /> {/* Header with logo and dropdown */}

      

      <h1 className="menu-title">Energy Drinks (Monster)</h1>
      <ul className="energy-menu">
        <li>Small - <span className="price">$5.49</span></li>
        <li>Medium - <span className="price">$5.99</span></li>
      </ul>

      

      <h2 className="flavor-title">Flavors</h2>
      <ul className="flavor-menu">
        <li><span className="highlight">Mango Madness</span>: Ultra Fiesta Mango + Coconut — A tropical explosion of mango goodness, perfectly balanced with smooth coconut for a refreshing finish.</li>
        <li><span className="highlight">Blue Lightning</span>: Zero Ultra + Blue Raspberry + Vanilla Cream — Electrify your taste buds with a bold blend of blue raspberry and creamy vanilla.</li>
        <li><span className="highlight">Strawberry Sunrise</span>: Ultra Strawberry Dreams + Strawberry + Guava + Coconut Cream — A delightful sunrise in a cup with layers of strawberry and tropical guava sweetness.</li>
        <li><span className="highlight">Razzle Dazzle</span>: Peachy Keen + Raspberry + Vanilla Cream — A dazzling mix of peach and raspberry, elevated with rich vanilla cream for a fruity and creamy sensation.</li>
        <li><span className="highlight">Tropical Thunder</span>: Ultra Watermelon + Passion Fruit — A storm of tropical flavors, where watermelon and passion fruit collide for a refreshing adventure.</li>
        <li><span className="highlight">Pineapple Punch</span>: Ultra Sunrise + Pineapple + Vanilla Cream — A punch of pineapple brilliance, complemented by smooth vanilla cream for a tangy and sweet delight.</li>
      </ul>

      <div className="contact-section">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-email">For any inquiries or to place a custom order, reach out to us at: <span className="email">floatprovo@gmail.com</span></p>
      </div>
    </div>
  );
}

export default Energy;
