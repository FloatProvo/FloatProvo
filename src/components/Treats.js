import React from 'react';
import Header from './Header';  // Importing the Header component
import './Treats.css';

const Treats = () => {
  return (
    <div className="treats-container">
      <Header /> {/* Header with logo and dropdown */}

      <h1 className="treats-title">Treats</h1>
      <p className="treats-description">
        Indulge in our selection of delightful treats, carefully crafted to satisfy your sweet cravings. At <span className="highlight">Float</span>, we go beyond drinks to offer you a range of delectable snacks. From warm cookies to cake pops, these treats are perfect for pairing with your favorite float or enjoying on their own.
      </p>

      <h2 className="menu-title">Treats Menu</h2>
      <ul className="treats-menu">
        <li><span className="highlight">Mallow Melt Cookies</span> (3 cookies) - <span className="price">$4.29</span></li>
        <p className="treat-description">Our Mallow Melt Cookies are soft, chewy, and filled with gooey marshmallow goodness. Each bite melts in your mouth, offering the perfect combination of warmth and sweetness.</p>

        <li><span className="highlight">Mini Pretzel Bites</span> (Cup of 8) - <span className="price">$3.99</span></li>
        <p className="treat-description">Enjoy these warm, salty mini pretzel bites, served with just the right amount of crunch. They’re perfect for snacking or sharing with friends and family.</p>

        <li><span className="highlight">Cake Pops</span> (Cup of 3) - <span className="price">$4.09</span></li>
        <p className="treat-description">These bite-sized cake pops are a fun, sweet treat. Moist and flavorful, they’re perfect for satisfying your dessert cravings without going overboard.</p>
      </ul>

      <div className="contact-section">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-email">For any inquiries or special treat requests, contact us at: <span className="email">floatprovo@gmail.com</span></p>
      </div>
    </div>
  );
}

export default Treats;
