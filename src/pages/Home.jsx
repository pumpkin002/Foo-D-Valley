import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
// import luffyImg from '../assets/images/luffy_img.png';

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await fetch('https://dummyjson.com/recipes');
        const data = await res.json();
        setRecipes(data.recipes || []);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching recipes:', error);
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <>
      <div className="home-container">
        <div className="hero-section">
          {/* Slideshow background layer */}
          <div className="hero-slideshow">
            <div className="hero-slide"></div>
            <div className="hero-slide"></div>
            <div className="hero-slide"></div>
            <div className="hero-slide"></div>
          </div>

          {/* Overlayed text content */}
          <div className="hero-overlay">
            <h1>Welcome to Foo D Valley</h1>
            <p>Discover, cook, and share amazing recipes from around the world.</p>
            <Link to="/recipes" className="explore-button">Explore Recipes</Link>
          </div>
        </div>

        <div className="features-section">
          <h2>Why Choose Us?</h2>
          <div className="features">
            <div className="feature-card">
              <h3>Handpicked Recipes</h3>
              <p>Only the best recipes with top ratings and real chef touches.</p>
            </div>
            <div className="feature-card">
              <h3>Global Variety</h3>
              <p>Explore culinary creations from across continents and cultures.</p>
            </div>
            <div className="feature-card">
              <h3> Step-by-Step Guides</h3>
              <p>Help you cook with confidence perfect for beginners and pros alike.</p>
            </div>
          </div>
        </div>

        <div className="home-recipes-preview">
          <h2>Popular Picks</h2>
          {loading ? (
            <p>Loading recipes...</p>
          ) : (
            <div className="recipe-preview-row">
              {recipes.slice(0, 4).map((recipe) => (
                <div className="preview-card" key={recipe.id}>
                  <img src={recipe.image} alt={recipe.name} />
                  <h4>{recipe.name}</h4>
                </div>
              ))}
            </div>
          )}
          <Link to="/recipes" className="more-button">View More Recipes</Link>
        </div>
      </div>

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
      <a href="/saved">Favourites</a>
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

export default Home;
