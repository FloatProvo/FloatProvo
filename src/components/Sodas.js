import React from 'react';
import Header from './Header';  // Importing the Header component
import './Sodas.css';

const Sodas = () => {
  return (
    <div className="sodas-container">
      <Header /> {/* Header with logo and dropdown */}

      <h1 className="sodas-title">Sodas</h1>
      <p className="sodas-description">
        At <span className="highlight">Float</span>, we take your soda experience to the next level. From classic combinations to inventive flavors, our sodas are crafted with care to provide a refreshing and unique twist. Whether you’re in the mood for a tropical escape or a bold, fruity blend, there’s something for everyone in our soda lineup.
      </p>

      <h2 className="menu-title">Soda Sizes & Prices</h2>
      <ul className="soda-sizes">
        <li>16 oz - <span className="price">$2.99</span></li>
        <li>24 oz - <span className="price">$3.49</span></li>
        <li>32 oz - <span className="price">$3.99</span></li>
        <li>44 oz - <span className="price">$4.49</span></li>
      </ul>

      <h2 className="flavor-title">Signature Sodas</h2>
      <ul className="flavor-list">
        <li><span className="highlight">Mami</span>:  Dr Pepper + Coconut</li>
        <li><span className="highlight">Shark Week</span>: Dr Pepper + Cherry + Fresh Lime</li>
        <li><span className="highlight">Cali Waves</span>: Diet Coke + Coconut + Fresh Lime</li>
        <li><span className="highlight">Midnight</span>:  Diet Coke + Rasberry + Coconut Cream</li>
        <li><span className="highlight">Perfect Pair</span>: Coke + Peach + Vanilla Cream</li>
        <li><span className="highlight">Wicked Wheel</span>: Mtn Dew + Passionfruit + Mango + Vanilla Cream</li>
        <li><span className="highlight">Pokey</span>:Mtn Dew + Strawberry + Guava + Coconut Cream </li>
        <li><span className="highlight">Thunderbird</span>:Sprite + Blue Rasberry + Coconut + Fresh Orange.</li>
        <li><span className="highlight">Sunset Splash</span>: Sprite + Watermelon + Peach + Fresh Mint</li>
        <li><span className="highlight">Double Down</span>: Root Beer + Vanilla + Coconut Cream</li>
        <li><span className="highlight">Snake Eyes</span>: Lemonade + Pineapple + Coconut Cream</li>
      </ul>

      <div className="contact-section">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-email">For any inquiries or special soda requests, contact us at: <span className="email">floatprovo@gmail.com</span></p>
      </div>
    </div>
  );
}

export default Sodas;
