import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-brand">Jaisal</h3>
            <p className="footer-description">
              Senior Engineer passionate about creating innovative solutions and
              automation.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <div className="footer-links">
              <a href="#home" className="footer-link">
                Home
              </a>
              <a href="#experience" className="footer-link">
                Experience
              </a>
              <a href="#skills" className="footer-link">
                Skills
              </a>
              <a href="#contact" className="footer-link">
                Contact
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Connect</h4>
            <div className="footer-social">
              <a
                href="https://www.linkedin.com/in/mohammedjaisaltt/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link linkedin"
              >
                <span className="social-icon">💼</span>
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/jaisaljastt"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link github"
              >
                <span className="social-icon">🐙</span>
                <span>GitHub</span>
              </a>
              <a
                href="mailto:mhmdjaisal572@gmail.com"
                className="footer-social-link email"
              >
                <span className="social-icon">📧</span>
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} Jaisal. All rights reserved.</p>
          </div>
          <div className="footer-credits">
            <p>Built with React & ❤️</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
