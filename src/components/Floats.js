import React from 'react';
import Header from './Header';  // Importing the Header component
import './Floats.css';

const Floats = () => {
  return (
    <div className="floats-container">
      <Header /> {/* Header with logo and dropdown */}
      
      <h1 className="floats-title">Root Beer Floats</h1>
      <p className="floats-description">
        At <span className="highlight">Float</span>, our root beer floats aren’t just a drink, they’re an experience. We take pride in crafting the perfect blend of rich, creamy ice cream and the finest root beer, served in a premium glass bottle for that extra fizz and pop. From classic favorites to inventive new combinations, we ensure every float is a memorable indulgence.
      </p>

      <h2 className="menu-title">Size Options</h2>
      <ul className="float-sizes">
        <li>Small - <span className="price">$6.99</span></li>
        <li>Medium - <span className="price">$8.99</span></li>
        <li>Large - <span className="price">$10.99</span></li>
        <li>Share Size - <span className="price">$11.99</span></li>
      </ul>
      <h2 className="float-note">All floats come with a glass bottle of our premium root beer.</h2>

      <h2 className="flavor-title">Signature Float Flavors</h2>
      <ul className="flavor-menu">
        <li><span className="highlight">Classic</span>: A timeless favorite — smooth vanilla ice cream paired with our signature root beer for the perfect combination of sweet and fizzy.</li>
        <li><span className="highlight">Strawberries n Cream</span>: Strawberry ice cream, fresh strawberries, and a touch of heavy cream create a fruity and creamy delight that’s perfect for any occasion.</li>
        <li><span className="highlight">Cookies n Cream</span>: A dessert lover’s dream, featuring Cookies N Cream ice cream, crunchy Oreo bits, and a drizzle of rich chocolate syrup.</li>
        <li><span className="highlight">Cookie Dough</span>: Indulge in the classic sweetness of cookie dough ice cream, delivering chunks of real cookie dough in every bite.</li>
        <li><span className="highlight">Cinnamon Churro</span>: Vanilla ice cream combined with Cinnamon Toast Crunch Minis and sprinkled with cinnamon sugar for a crunchy, cinnamon-spiced treat.</li>
        <li><span className="highlight">Peaches n Cream</span>: Vanilla ice cream, paired with peaches, and a splash of heavy cream for a perfectly sweet, velvety float.</li>
        <li><span className="highlight">Salted Caramel</span>: Caramel Caribou ice cream paired with pretzels and a rich caramel syrup drizzle — a salty-sweet masterpiece.</li>
        <li><span className="highlight">S'mores</span>: Capture the essence of the campfire with vanilla ice cream, marshmallow fluff, graham cracker crumbs, and a drizzle of chocolate syrup.</li>
      </ul>

      <div className="contact-section">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-email">For custom float options or event bookings, contact us at: <span className="email">floatprovo@gmail.com</span></p>
      </div>
    </div>
  );
}

export default Floats;
