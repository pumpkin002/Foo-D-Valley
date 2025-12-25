import React from 'react'; 
import './Recipes.css'; 
 
const RecipeDetails = ({ recipe, onBack }) => { 
  return ( 
    <div className="recipe-details"> 
      <button onClick={onBack} className="back-button">← Back</button> 
      <h2>{recipe.name}</h2> 
      <img src={recipe.image} alt={recipe.name} /> 
      <p><strong>Prep Time:</strong> {recipe.prepTimeMinutes} minutes</p> 
      <p><strong>Cook Time:</strong> {recipe.cookTimeMinutes} minutes</p> 
      <p><strong>Servings:</strong> {recipe.servings}</p> 
      <p><strong>Ingredients:</strong></p> 
      <ul> 
        {recipe.ingredients.map((item, idx) => <li key={idx}>{item}</li>)} 
      </ul> 
      <p><strong>Instructions:</strong></p> 
      <ol> 
        {recipe.instructions.map((step, idx) => <li key={idx}>{step}</li>)} 
      </ol> 
    </div> 
  ); 
}; 
 
export default RecipeDetails;