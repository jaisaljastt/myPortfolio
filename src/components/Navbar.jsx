import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <a href="#home">Jaisal</a>
        </div>

        {/* Navigation Links */}
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="#experience" className="navbar-link">
              Experience
            </a>
          </li>
          <li className="navbar-item">
            <a href="#skills" className="navbar-link">
              Skills
            </a>
          </li>
          <li className="navbar-item">
            <a href="#contact" className="navbar-link">
              Contact Me
            </a>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="navbar-toggle" id="mobile-menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
