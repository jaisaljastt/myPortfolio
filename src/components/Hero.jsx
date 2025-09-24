import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="greeting">**</span>
              <span className="name">**</span>
            </h1>
            <p className="hero-bio">
              Proactive and detail-oriented Python Developer with 3 years of
              experience skilled professional with three years of experience in
              creating backend systems and APIs using FastAPI. They are
              expanding their skillset to include Django for full-stack
              development and have experience with Docker, basic cloud
              operations, Git, and Agile workflows with Jira.
            </p>
          </div>
          <div className="hero-image">
            <div className="image-frame">
              <img
                src="/api/placeholder/300/300"
                alt="Jaisal Profile"
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
