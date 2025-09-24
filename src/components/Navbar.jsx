import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <a href="#home">Jaisal</a>
        </div>

        {/* Navigation Links */}
        <ul className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
          <li className="navbar-item">
            <a href="#experience" className="navbar-link" onClick={closeMenu}>
              Experience
            </a>
          </li>
          <li className="navbar-item">
            <a href="#skills" className="navbar-link" onClick={closeMenu}>
              Skills
            </a>
          </li>
          <li className="navbar-item">
            <a href="#contact" className="navbar-link" onClick={closeMenu}>
              Contact Me
            </a>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div
          className={`navbar-toggle ${isMenuOpen ? "active" : ""}`}
          id="mobile-menu"
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
