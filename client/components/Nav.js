import React from 'react';
import { NavLink } from 'react-router-dom';
import FavoritesContext from '../contexts/FavoritesContext';

const Nav = () => {
  return (
    <nav className="navigation">
      <FavoritesContext.Consumer>
        {({ count }) => (
          <ul>
            <li>
              <NavLink
                exact
                to="/"
                // aria-
                role="button"
              >
                Search
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/favorites"
                // aria-
                role="button"
              >
                Favorites
              </NavLink>
              <span className="count">{count}</span>
            </li>
          </ul>
        )}
      </FavoritesContext.Consumer>
    </nav>
  );
};

export default Nav;
