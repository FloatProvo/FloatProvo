import React from 'react';
import Header from './Header';  // Importing the Header component
import './Waters.css';

const Waters = () => {
  return (
    <div className="waters-container">
      <Header /> {/* Header with logo and dropdown */}

      <h1 className="waters-title">Waters</h1>
      <p className="waters-description">
        Stay refreshed with our selection of sparkling and non-sparkling waters. At <span className="highlight">Float</span>, we believe in offering more than just hydration — our waters are infused with flavors that are both invigorating and satisfying. From fruity blends to tropical delights, these waters are the perfect thirst-quenchers for any occasion.
      </p>

      <h2 className="menu-title">Sizes & Prices</h2>
      <ul className="water-sizes">
        <li>16 oz - <span className="price">$2.29</span></li>
        <li>24 oz - <span className="price">$2.89</span></li>
        <li>32 oz - <span className="price">$3.49</span></li>
        <li>44 oz - <span className="price">$4.09</span></li>
      </ul>

      <h2 className="flavor-title">Signature Water Flavors</h2>
      <ul className="flavor-list">
        <li><span className="highlight">Island Breeze</span>: A tropical blend of pineapple chunks, sugar-free pineapple, sugar-free coconut, and creamy coconut cream — a vacation in a cup!</li>
        <li><span className="highlight">Strawberry Splash</span>: A delicious fusion of sugar-free strawberry, sugar-free vanilla, creamy coconut, and fresh strawberry puree for a refreshing, fruity burst.</li>
        <li><span className="highlight">Sweet Peach</span>: A light and sweet mix of sugar-free peach, sugar-free vanilla, and smooth vanilla cream — the perfect balance of sweet and creamy.</li>
        <li><span className="highlight">Citrus Chill</span>: A zesty and refreshing blend of fresh orange, fresh lemon, and fresh lime, offering a cooling citrus explosion.</li>
        <li><span className="highlight">Cherry Zing</span>: The tangy combination of sugar-free cherry and fresh lime creates a lively and invigorating drink that’s perfect for any time of day.</li>
      </ul>

      <div className="contact-section">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-email">For any inquiries or special water requests, contact us at: <span className="email">floatprovo@gmail.com</span></p>
      </div>
    </div>
  );
}

export default Waters;
