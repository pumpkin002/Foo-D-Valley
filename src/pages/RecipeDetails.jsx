import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Recipes.css';

const RecipeDetails = ({ onSave, savedRecipes, onBack }) => {
  const location = useLocation();

  const [recipe, setRecipe] = useState(() => {
    const stateRecipe = location.state?.recipe;
    if (stateRecipe) {
      // Ensure recipe has an ID
      return {
        ...stateRecipe,
        id: stateRecipe.id || stateRecipe.name,
      };
    }

    const stored = localStorage.getItem('selectedRecipe');
    return stored ? JSON.parse(stored) : null;
  });

  useEffect(() => {
    if (recipe) {
      localStorage.setItem('selectedRecipe', JSON.stringify(recipe));
    }
  }, [recipe]);

  const isSaved = savedRecipes?.some((r) => r.id === recipe?.id);

  const handleSaveClick = () => {
    if (!recipe || !onSave) return;
    onSave(recipe);
  };

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <>
      <div className="recipe-details">
        <div className="top-bar">
          <button onClick={onBack} className="back-button">
            ← Back
          </button>

          <button className="heart-button" onClick={handleSaveClick}>
            <FaHeart
              style={{
                color: isSaved ? 'crimson' : 'gray',
                fontSize: '24px',
              }}
            />
          </button>
        </div>

        <h2>{recipe.name}</h2>

        <img
          src={recipe.image}
          alt={recipe.name}
          className="recipe-image"
        />

        <p><strong>Prep Time:</strong> {recipe.prepTime}</p>
        <p><strong>Cook Time:</strong> {recipe.cookTime}</p>
        <p><strong>Servings:</strong> {recipe.servings}</p>

        <h3>Ingredients</h3>
        <ul>
          {recipe.ingredients?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3>Instructions</h3>
        <ol>
          {recipe.instructions?.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
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

export default RecipeDetails;
