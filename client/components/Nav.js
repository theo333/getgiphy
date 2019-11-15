import React from 'react';
import { NavLink } from 'react-router-dom';
import FavoritesContext from '../contexts/FavoritesContext';

const Nav = () => {
  return (
    <nav id="navigation">
      {/* TODO convert ul => div */}
      <FavoritesContext.Consumer>
        {({ count }) => (
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
              <span className="count">{count}</span>
            </li>
          </ul>
        )}
      </FavoritesContext.Consumer>
    </nav>
  );
};

export default Nav;
