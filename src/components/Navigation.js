import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to="/mountain">Montanhas</NavLink></li>
        <li><NavLink to="/beach">Praias</NavLink></li>
        <li><NavLink to="/bird">Pássaros</NavLink></li>
        <li><NavLink to="/food">Comida</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;
