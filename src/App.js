import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Recipes from './pages/Recipes';
import RecipeDetails from './pages/RecipeDetails';
import Home from './pages/Home';
import About from './pages/About';
import SavedRecipes from './pages/SavedRecipes';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [savedRecipes, setSavedRecipes] = useState(() => {
    const saved = localStorage.getItem('savedRecipes');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
  }, [savedRecipes]);

  const handleSaveRecipe = (recipe) => {
    setSavedRecipes((prev) =>
      prev.find((r) => r.id === recipe.id) ? prev : [...prev, recipe]
    );
  };

  const handleRemoveRecipe = (id) => {
    setSavedRecipes((prev) => prev.filter((r) => r.id !== id));
  };

  const toggleSaveRecipe = (recipe) => {
    const exists = savedRecipes.find((r) => r.id === recipe.id);
    exists ? handleRemoveRecipe(recipe.id) : handleSaveRecipe(recipe);
  };

  return (
    <div id="main">
      <Router>
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/recipes"
            element={
              <Recipes
                searchTerm={searchTerm}
                savedRecipes={savedRecipes}
                onToggleSave={toggleSaveRecipe}
              />
            }
          />

          <Route
            path="/recipe-details"
            element={
              <RecipeDetails
                onSave={toggleSaveRecipe}
                savedRecipes={savedRecipes}
                onBack={() => window.history.back()}
              />
            }
          />

          <Route
            path="/saved"
            element={
              <SavedRecipes
                savedRecipes={savedRecipes}
                onToggleSave={toggleSaveRecipe}
              />
            }
          />

          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
