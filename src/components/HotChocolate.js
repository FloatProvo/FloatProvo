import React from 'react';
import Header from './Header';  // Importing the Header component
import './HotChocolate.css';

const HotChocolate = () => {
  return (
    <div className="hot-chocolate-container">
      <Header /> {/* Header with logo and dropdown */}

      <h1 className="hot-chocolate-title">Hot Chocolate</h1>
      <p className="hot-chocolate-description">
        Warm up with our decadent and luxurious hot chocolates. At <span className="highlight">Float</span>, we take this cozy classic to the next level by blending rich, velvety flavors with whipped cream, spices, and more. Whether you’re looking for the soothing sweetness of vanilla or a spicy cinnamon kick, we’ve got a hot chocolate that’s sure to please. Sip, savor, and enjoy!
      </p>

      <h2 className="menu-title">Hot Chocolate Menu</h2>
      {/* Displaying the price under the menu title */}
      <p className="hot-chocolate-price">Price: $3.49</p>

      <ul className="hot-chocolate-menu">
        <li><span className="highlight">Crisp Peppermint</span>: Peppermint syrup, creamy chocolate, topped with whipped cream.</li>
        <li><span className="highlight">Toasted Marshmallow</span>: Toasty marshmallow flavor combined with rich chocolate and whipped cream.</li>
        <li><span className="highlight">Smooth Coco</span>: A blend of sweet vanilla and coconut cream melting into rich chocolate.</li>
        <li><span className="highlight">Hot Spice</span>: Cinnamon and vanilla cream combined with cinnamon toast crunch minis for a warm kick.</li>
      </ul>

      <div className="contact-section">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-email">For any inquiries or special hot chocolate requests, contact us at: <span className="email">floatprovo@gmail.com</span></p>
      </div>
    </div>
  );
}

export default HotChocolate;
