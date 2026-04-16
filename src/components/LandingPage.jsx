import React from "react";
import { Link } from "react-router-dom";
import AboutUs from "../AboutUs";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="hero-section">
        <h1>Paradise Nursery</h1>
        <p>Your one‑stop shop for beautiful, healthy houseplants.</p>
        <Link to="/plants">
          <button className="get-started-btn">Get Started</button>
        </Link>
      </div>
      <div className="about-section">
        <AboutUs />
      </div>
    </div>
  );
};

export default LandingPage;
