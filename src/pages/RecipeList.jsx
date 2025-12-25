import React from 'react';
import './Recipes.css';

const RecipeList = ({ recipes, onSelect }) => {
  return (
    <div className="recipe-grid">
      {recipes.map((recipe) => (
        <div
          className="recipe-card"
          key={recipe.id}
          onClick={() => onSelect(recipe)}
        >
          <img src={recipe.image} alt={recipe.name} />
          <h3>{recipe.name}</h3>

          {/* Hover popup content */}
          <div className="recipe-popup">
            <div className="popup-image">
              <img src={recipe.image} alt={recipe.name} />
            </div>
            <div className="popup-text">
              <p><strong>Origin:</strong> {recipe.cuisine}</p>
              <p><strong>Chef:</strong> {recipe.author || 'Unknown'}</p>
              <p><strong>Time:</strong> {recipe.cookTimeMinutes} mins</p>
              <p><strong>Ingredients:</strong> {recipe.ingredients.length}</p>
              <p className="description">{recipe.instructions?.[0] || 'No description available.'}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

    
  );
};

export default RecipeList;
