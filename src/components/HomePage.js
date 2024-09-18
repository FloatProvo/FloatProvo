import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <Header />

      {/* Hero Section */}
      <div className="homepage-hero-section">
        <h1 className="homepage-hero-heading">Life's Better with a Little Float</h1>
        <Link to="/full-menu" className="homepage-cta-btn">Explore Full Menu</Link>
      </div>

      {/* Bubble Categories Section */}
      <div className="homepage-bubble-container">
        <Link to="/floats" className="homepage-bubble">
          <span>Floats</span>
        </Link>
        <Link to="/freezes" className="homepage-bubble">
          <span>Freezes</span>
        </Link>
        <Link to="/sodas" className="homepage-bubble">
          <span>Sodas</span>
        </Link>
        <Link to="/waters" className="homepage-bubble">
          <span>Waters</span>
        </Link>
        <Link to="/energy" className="homepage-bubble">
          <span>Energy Drinks</span>
        </Link>
        <Link to="/treats" className="homepage-bubble">
          <span>Treats</span>
        </Link>
        <Link to="/hot-chocolate" className="homepage-bubble">
          <span>Hot Chocolate</span>
        </Link>
        <Link to="/catering" className="homepage-bubble">
          <span>Catering</span>
        </Link>
        <Link to="/rootbeer" className="homepage-bubble">
          <span>Root Beer</span>
        </Link>
      </div>

      {/* Footer Section */}
      <footer className="homepage-footer">
        <p>Contact us at <a href="mailto:floatprovo@gmail.com" className="homepage-email-link">floatprovo@gmail.com</a></p>
        <p>3645 N Canyon Rd, Provo, UT</p>
      </footer>
    </div>
  );
};

export default HomePage;
