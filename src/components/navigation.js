import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <div className="header">
      <nav className="navbar">
        <span className="Bookstore-CMS">Bookstore CMS</span>
        <NavLink exact to="/bookList">BOOKS</NavLink>
        <NavLink to="/categories">CATEGORIES</NavLink>
      </nav>
    </div>
  );
}

export default Navigation;
