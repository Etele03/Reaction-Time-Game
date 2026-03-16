import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const getLinkClass = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header>
      <Link to="/" className="logo" onClick={closeMenu}>
        Reflex<span className="text-pale">App</span>
      </Link>
      
      <div 
        className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <nav>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link to="/" className={getLinkClass('/')} onClick={closeMenu}>Főoldal</Link>
          </li>
          <li>
            <Link to="/szabalyok" className={getLinkClass('/szabalyok')} onClick={closeMenu}>Szabályok</Link>
          </li>
          <li>
            <Link to="/login" className="login-btn" onClick={closeMenu}>Bejelentkezés</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}