// pages/About.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './About.css';

const About = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="about-container">
        <h1>About <span className="highlight">Foo <span className="logo-d">D</span> Valley</span></h1>

        <p className="intro-text">
          Welcome to <strong>Foo D Valley</strong> — your digital kitchen companion! Whether you're a home cook or a seasoned chef, we’re here to inspire and empower you to explore a world of flavors.
        </p>

        <section className="about-section">
          <h2>🌟 Our Mission</h2>
          <p>
            To make cooking fun, easy, and accessible for everyone. Great food connects people and sparks joy — and we want to bring that to your kitchen.
          </p>
        </section>

        <section className="about-section">
          <h2>🍽 What You'll Find</h2>
          <ul>
            <li>✔ Delicious international & local recipes</li>
            <li>✔ Step-by-step instructions for all skill levels</li>
            <li>✔ Time-saving tips & smart kitchen hacks</li>
            <li>✔ Beautiful, easy-to-use interface</li>
            <li>✔ Ability to save and revisit your favorite dishes</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>🤝 Join the Community</h2>
          <p>
            Try new recipes, share your creations, and become part of a growing foodie family. Follow us on social media and connect with fellow food lovers!
          </p>
        </section>

        <section className="about-section">
          <h2>👨‍💻 Meet the Developer</h2>
          <p>
            This website is designed and developed by <strong>Mohammed Anas</strong>, a passionate developer and food enthusiast who combined clean UI design with culinary passion.
          </p>
          <p><strong>Email:</strong> <a href="mailto:anasdeveloper@email.com">mohammedanasp1234@gmail.com</a></p>
          <div className="social-links">
            <a href="mohammedanasp1234@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="icon" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/anaspalakkal" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="icon" /> LinkedIn
            </a>
            <a href="https://instagram.com/anas.food.dev" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="icon" /> Instagram
            </a>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-logo-text">
            <a href="/" className="footer-logo-link">
              Foo<span className="logo-d">D</span> Valley
            </a>
          </div>

          <div className="footer-links">
            <a href="/">Home</a>
            <a href="/recipes">Recipes</a>
            <a href="/saved">Favorites</a>
            <a href="/about">About</a>
          </div>

          {/* ✅ Add this line below the links */}
          <p style={{ marginTop: "20px", fontSize: "0.9rem", color: "#b0413e" }}>
            © 2025 Foo D Valley. All rights reserved.
          </p>

          <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Back to Top
          </button>
        </div>
      </footer>
    </>
  );
};

export default About;
