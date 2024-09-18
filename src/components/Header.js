import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import floatLogo from './float.png';  // Ensure float.png is located in the correct folder

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);  // Proper toggle on each click
  };

  // Close the dropdown when clicking outside
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);  // Close the dropdown if clicking outside
    }
  };

  useEffect(() => {
    // Add event listener for clicks outside the dropdown
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={floatLogo} alt="Float Logo" className="logo-img" />
        </Link>
      </div>

      <div className="hamburger-container" onClick={toggleMenu}>
        <div className={`hamburger-icon ${isOpen ? 'open' : ''}`}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>

      <nav ref={menuRef} className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
        <Link to="/" className="dropdown-link">Home</Link>
        <Link to="/full-menu" className="dropdown-link">Full Menu</Link>
        <Link to="/floats" className="dropdown-link">Floats</Link>
        <Link to="/freezes" className="dropdown-link">Freezes</Link>
        <Link to="/sodas" className="dropdown-link">Sodas</Link>
        <Link to="/energy" className="dropdown-link">Energy</Link>
        <Link to="/waters" className="dropdown-link">Waters</Link>
        <Link to="/treats" className="dropdown-link">Treats</Link>
        <Link to="/hot-chocolate" className="dropdown-link">Hot Chocolate</Link>
        <Link to="/catering" className="dropdown-link">Catering</Link>
        <Link to="/rootbeer" className="dropdown-link">Root Beer</Link>
       
      </nav>
    </header>
  );
};

export default Header;