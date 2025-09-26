import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-subtitle">Let's discuss or just say hello!</p>

        <div className="contact-content">
          {/* Contact Info & Social Links */}
          <div className="contact-info-section">
            <div className="contact-info">
              <p className="info-description">
                I'm always interested in new opportunities. Feel free to reach
                out!
              </p>

              <div className="contact-details-social-container">
                <div className="contact-details">
                  <h4 className="social-title">Let's Connect</h4>
                  <div className="contact-item">
                    <span className="contact-icon">📧</span>
                    <span className="contact-text">
                      mhmdjaisal572@gmail.com
                    </span>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon">📱</span>
                    <span className="contact-text">+91 9961452750</span>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon">📍</span>
                    <span className="contact-text">Kerala, India</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="social-links">
                  <h4 className="social-title">Find Me On</h4>
                  <div className="social-buttons">
                    <a
                      href="https://www.linkedin.com/in/mohammedjaisaltt/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-btn linkedin"
                    >
                      <span className="social-icon">💼</span>
                      <span className="social-text">LinkedIn</span>
                    </a>
                    <a
                      href="https://github.com/jaisaljastt"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-btn github"
                    >
                      <span className="social-icon">🐙</span>
                      <span className="social-text">GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
