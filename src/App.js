import React, { useState } from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from './components/Navbar'; 
import Recipes from './pages/Recipes'; 
import Home from './pages/Home'; 
import About from './pages/About'; 
import SavedRecipes from './pages/SavedRecipes';
import './App.css' 
function App() { 
const [searchTerm, setSearchTerm] = useState(''); 
return ( 
<div id='main'> 
<Router> 
<Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> 
<Routes> 
<Route path="/" element={<Home />} /> 
<Route path="/recipes" element={<Recipes searchTerm={searchTerm} />} /> 
<Route path="/about" element={<About />} /> 
</Routes> 
</Router> 
</div> 
); 
} 
export default App;