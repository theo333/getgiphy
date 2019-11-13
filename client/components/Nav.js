import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav id="navigation">
      <ul>
        <li>
          <NavLink
            to="/"
            // aria-
          >
            Search
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favorites"
            // aria-
          >
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
