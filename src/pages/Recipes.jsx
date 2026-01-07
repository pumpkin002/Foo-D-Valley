import React, { useEffect, useState } from 'react';
import RecipeList from './RecipeList';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Recipes.css';

const Recipes = ({ searchTerm }) => {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await fetch('https://dummyjson.com/recipes');
        const data = await res.json();
        setRecipes(data.recipes);
      } catch (err) {
        console.error('Error fetching recipes:', err);
      }
    };
    fetchRecipes();
  }, []);

  const filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectRecipe = (recipe) => {
    navigate('/recipe-details', {
      state: { recipe }
    });
  };

  return (
    <>
      <div className="recipes-container">
        <h2>All Recipes</h2>
        <RecipeList recipes={filteredRecipes} onSelect={handleSelectRecipe} />
      </div>

      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-logo">
            <Link to="/" className="footer-logo-link">
              Foo <span className="logo-d">D</span> Valley
            </Link>
          </div>
          <p>© 2025 Foo D Valley. All rights reserved.</p>
          <button
            className="back-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Back to Top
          </button>
        </div>
      </footer>
    </>
  );
};

export default Recipes;
