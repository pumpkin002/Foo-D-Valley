// SavedRecipes.jsx
import React from 'react';
import { FaHeart } from 'react-icons/fa';
import './SavedRecipes.css';

const SavedRecipes = ({ savedRecipes, onToggleSave }) => {
  return (
    <div className="saved-container">
      <h2>Saved Recipes</h2>
      {savedRecipes.length === 0 ? (
        <p>No saved recipes yet.</p>
      ) : (
        <div className="saved-grid">
          {savedRecipes.map((recipe) => (
            <div key={recipe.id} className="saved-card">
              <div className="image-wrapper">
                <img src={recipe.image} alt={recipe.name} />
                <FaHeart
                  className="heart-icon"
                  onClick={() => onToggleSave(recipe)}
                />
              </div>
              <h3>{recipe.name}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedRecipes;
