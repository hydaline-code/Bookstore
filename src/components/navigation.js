import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <div className="header">
    <nav className="navbar">
      <span className="Bookstore-CMS">Bookstore CMS</span>
      <NavLink exact to="/bookList">BOOKS</NavLink>
      <NavLink to="/categories">CATEGORIES</NavLink>
    </nav>
    <div className="user">
      <FontAwesomeIcon className="icon" icon={faUser} />
    </div>
  </div>
);

export default Navigation;
