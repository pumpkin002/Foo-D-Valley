import React from 'react'; 
import { Link, useLocation, useNavigate } from 'react-router-dom'; 
import { FaSearch } from 'react-icons/fa'; // ✅ added
import './Navbar.css'; 

const Navbar = ({ searchTerm, setSearchTerm }) => { 
  const location = useLocation(); 
  const navigate = useNavigate(); 

  const handleSearchChange = (e) => { 
    setSearchTerm(e.target.value); 
  }; 

  const handleSubmit = (e) => { 
    e.preventDefault(); 
    if (location.pathname !== '/recipes') { 
      navigate('/recipes'); 
    } 
  }; 

  return ( 
    <nav className="navbar"> 
      <div className="navbar-logo"> 
        <Link to="/">Foo <span className="logo-d">D</span> Valley</Link> 
      </div> 
      <ul className="navbar-links"> 
        <li><Link to="/">Home</Link></li> 
        <li><Link to="/recipes">Recipes</Link></li> 
        <li><Link to="/saved">Favorites</Link></li> 
        <li><Link to="/about">About</Link></li> 
      </ul> 
      <form className="navbar-search" onSubmit={handleSubmit}> 
        <input 
          type="text" 
          placeholder="Search recipes..." 
          value={searchTerm} 
          onChange={handleSearchChange} 
        /> 
        <button type="submit">
          <FaSearch /> {/* ✅ modern icon */}
        </button> 
      </form> 
    </nav> 
  ); 
}; 

export default Navbar;  
