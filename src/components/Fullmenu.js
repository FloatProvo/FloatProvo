import React from 'react';
import Header from './Header';  // Importing the Header component
import './Fullmenu.css';

const Fullmenu = () => {
  return (
    <div className="full-menu-container">
      <Header /> {/* Header with logo and dropdown */}

      <h1 className="full-menu-title">Full Menu</h1>
     
      {/* Root Beer Floats */}
      <div className="menu-section">
        <h2 className="menu-category">Root Beer Floats</h2>
        <ul className="menu-items">
          <li>Small - $6.99</li>
          <li>Medium - $8.99</li>
          <li>Large - $10.99</li>
          <li>Share Size - $11.99</li>
        </ul>
        <p>All Floats come with a glass bottle of root beer</p>
        <ul className="float-flavors">
          <li><span className="highlight">Classic</span> (Vanilla Ice Cream)</li>
          <li><span className="highlight">Strawberries n Cream</span> (Strawberry Ice Cream + Fresh Strawberries + Heavy Cream)</li>
          <li><span className="highlight">Cookies n Cream</span> (Cookies N Cream Ice Cream + Oreos + Chocolate Syrup)</li>
          <li><span className="highlight">Cookie Dough</span> (Cookie Dough Ice Cream)</li>
          <li><span className="highlight">Cinnamon Churro</span> (Vanilla Ice Cream + Cinnamon Toast Crunch Minis + Cinnamon Sugar)</li>
          <li><span className="highlight">Peaches n Cream</span> (Vanilla Ice Cream + Peaches + Heavy Cream)</li>
          <li><span className="highlight">Salted Caramel</span> (Caramel Caribou Ice Cream + Pretzels + Caramel Syrup)</li>
          <li><span className="highlight">S'mores</span> (Vanilla Ice Cream + Marshmallow Fluff, Graham Cracker Crumbs, and Chocolate Syrup)</li>
        </ul>
      </div>

      {/* Freezes */}
      <div className="menu-section">
        <h2 className="menu-category">Freezes</h2>
        <ul className="menu-items">
          <li>16 oz - $5.99</li>
          <li>24 oz - $6.79</li>
        </ul>
        <p>Any Soda blended with Vanilla Ice Cream</p>
      </div>

      {/* Sodas */}
      <div className="menu-section">
        <h2 className="menu-category">Sodas</h2>
        <ul className="menu-items">
          <li>16 oz - $2.99</li>
          <li>24 oz - $3.49</li>
          <li>32 oz - $3.99</li>
          <li>44 oz - $4.49</li>
        </ul>
        <ul className="soda-flavors">
          <li><span className="highlight">Mami</span> (Dr Pepper + Coconut)</li>
          <li><span className="highlight">Shark Week</span> (Dr Pepper + Cherry + Fresh Lime)</li>
          <li><span className="highlight">Cali Waves</span> (Diet Coke + Coconut + Fresh Lime)</li>
          <li><span className="highlight">Midnight</span> (Diet Coke + Raspberry + Coconut Cream)</li>
          <li><span className="highlight">Perfect Pair</span> (Coke + Peach + Vanilla Cream)</li>
          <li><span className="highlight">Wicked Wheel</span> (Mtn Dew + Passionfruit + Mango + Vanilla Cream)</li>
          <li><span className="highlight">Pokey</span> (Mtn Dew + Strawberry + Guava + Coconut Cream)</li>
          <li><span className="highlight">Thunderbird</span> (Sprite + Blue Raspberry + Coconut + Fresh Orange)</li>
          <li><span className="highlight">Sunset Splash</span> (Sprite + Watermelon + Peach + Fresh Mint)</li>
          <li><span className="highlight">Double Down</span> (Root Beer + Vanilla + Coconut Cream)</li>
          <li><span className="highlight">Snake Eyes</span> (Lemonade + Pineapple + Coconut Cream)</li>
        </ul>
      </div>

      {/* Energy Drinks */}
      <div className="menu-section">
        <h2 className="menu-category">Energy Drinks (Monster)</h2>
        <ul className="menu-items">
          <li>Small - $5.49</li>
          <li>Medium - $5.99</li>
        </ul>
        <ul className="energy-flavors">
          <li><span className="highlight">Mango Madness</span> (Ultra Fiesta Mango + Coconut)</li>
          <li><span className="highlight">Blue Lightning</span> (Zero Ultra + Blue Raspberry + Vanilla Cream)</li>
          <li><span className="highlight">Strawberry Sunrise</span> (Ultra Strawberry Dreams + Strawberry + Guava + Coconut Cream)</li>
          <li><span className="highlight">Razzle Dazzle</span> (Peachy Keen + Raspberry + Vanilla Cream)</li>
          <li><span className="highlight">Tropical Thunder</span> (Ultra Watermelon + Passion Fruit)</li>
          <li><span className="highlight">Pineapple Punch</span> (Ultra Sunrise + Pineapple + Vanilla Cream)</li>
        </ul>
      </div>

      {/* Waters */}
      <div className="menu-section">
        <h2 className="menu-category">Waters (Sparkling and Non-Sparkling)</h2>
        <ul className="menu-items">
          <li>16 oz - $2.29</li>
          <li>24 oz - $2.89</li>
          <li>32 oz - $3.49</li>
          <li>44 oz - $4.09</li>
        </ul>
        <ul className="water-flavors">
          <li><span className="highlight">Island Breeze</span> (Pineapple Chunks + Sugar-Free Pineapple + Sugar-Free Coconut + Coconut Cream)</li>
          <li><span className="highlight">Strawberry Splash</span> (Sugar-Free Strawberry + Sugar-Free Vanilla + Coconut Cream + Strawberry Puree)</li>
          <li><span className="highlight">Sweet Peach</span> (Sugar-Free Peach + Sugar-Free Vanilla + Vanilla Cream)</li>
          <li><span className="highlight">Citrus Chill</span> (Fresh Orange + Fresh Lemon + Fresh Lime)</li>
          <li><span className="highlight">Cherry Zing</span> (Sugar-Free Cherry + Fresh Lime)</li>
        </ul>
      </div>

      {/* Treats */}
      <div className="menu-section">
        <h2 className="menu-category">Treats</h2>
        <ul className="menu-items">
          <li><span className="highlight">Mallow Melt Cookies</span> (3 Cookies - $4.29)</li>
          <li><span className="highlight">Mini Pretzel Bites</span> (Cup of 8 - $3.99)</li>
          <li><span className="highlight">Cake Pops</span> (Cup of 3 - $4.19)</li>
        </ul>
      </div>

      {/* Hot Chocolate */}
      <div className="menu-section">
        <h2 className="menu-category">Hot Chocolate</h2>
        <h2>$3.79</h2>
        <ul className="hot-chocolate-flavors">
          <li><span className="highlight">Crisp Peppermint</span> (Peppermint + Whipped Cream)</li>
          <li><span className="highlight">Toasted Marshmallow</span> (Toasted Marshmallow + Marshmallows + Whipped Cream)</li>
          <li><span className="highlight">Smooth Coco</span> (Vanilla + Coconut Cream)</li>
          <li><span className="highlight">Hot Spice</span> (Cinnamon + Cinnamon Toast Crunch Minis + Vanilla Cream)</li>
        </ul>
      </div>
    </div>
  );
};

export default Fullmenu;
