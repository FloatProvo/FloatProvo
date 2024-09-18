import React from 'react';
import Header from './Header';  // Importing the Header component
import './RootBeer.css';

const RootBeer = () => {
  return (
    <div className="rootbeer-container">
      <Header /> {/* Header with logo and dropdown */}
      
      <h1 className="rootbeer-title">Our Root Beers</h1>
      <p className="rootbeer-intro">We offer a wide variety of delicious root beers. Here’s a list of some of the most popular ones we serve:</p>

      <ul className="rootbeer-list">
        <li><strong>Bedfords Marionberry Creme:</strong> A smooth blend of marionberry and cream, offering a unique, fruity twist on a classic soda.</li>
        <li><strong>Bedfords:</strong> A traditional root beer with bold flavors and a rich finish.</li>
        <li><strong>A&W:</strong> A classic, smooth root beer with a rich, creamy vanilla flavor.</li>
        <li><strong>Dads:</strong> Old-fashioned root beer with a bold, spicy kick, a true American classic.</li>
        <li><strong>Bulldog:</strong> A premium root beer with a creamy vanilla base and a slightly frothy texture.</li>
        <li><strong>Brownie:</strong> A sweet root beer with hints of caramel and vanilla, a nostalgic treat.</li>
        <li><strong>Virgils:</strong> A handcrafted gourmet root beer made with natural ingredients for a smooth and rich flavor.</li>
        <li><strong>Jackson Hole:</strong> A frothy root beer with a deep, full-bodied flavor and a hint of vanilla.</li>
        <li><strong>Frostie:</strong> A sweet and creamy root beer with a hint of wintergreen and vanilla.</li>
        <li><strong>Red Arrow:</strong> A strong and spicy root beer with rich caramel and vanilla notes.</li>
        <li><strong>Hanks:</strong> A gourmet cream root beer with a smooth, velvety texture and rich vanilla flavor.</li>
        <li><strong>Triple XXX:</strong> A full-bodied, robust root beer with a creamy finish.</li>
        <li><strong>Earps Sarsaparilla:</strong> A rich, traditional sarsaparilla with deep herbal flavors and a smooth finish.</li>
        <li><strong>Cicero Salted Caramel:</strong> A sweet and salty twist on traditional root beer with hints of caramel.</li>
        <li><strong>Sioux City:</strong> A bold, strong-flavored root beer with a slightly spicy undertone.</li>
        <li><strong>Boylan:</strong> A classic root beer with a smooth blend of vanilla, birch, and sweet spices.</li>
      </ul>
    </div>
  );
};

export default RootBeer;
