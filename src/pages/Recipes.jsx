import React, { useEffect, useState } from 'react'; 
import RecipeList from './RecipeList'; 
import RecipeDetails from './RecipeDetails'; 
import { Link } from 'react-router-dom'; 
import './Recipes.css'; 
 
const Recipes = ({ searchTerm }) => { 
  const [selectedRecipe, setSelectedRecipe] = useState(null); 
  const [recipes, setRecipes] = useState([]); 
 
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
 
  return ( 
    <> 
      <div className="recipes-container"> 
        <h2>All Recipes</h2> 
        {!selectedRecipe ? ( 
          <RecipeList recipes={filteredRecipes} onSelect={setSelectedRecipe} /> 
        ) : ( 
          <RecipeDetails recipe={selectedRecipe} onBack={() => setSelectedRecipe(null)} /> 
        )} 
      </div> 
 
      {/* Footer */} 
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