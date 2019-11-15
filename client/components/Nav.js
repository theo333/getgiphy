import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import FavoritesContext from '../contexts/FavoritesContext';

const Nav = () => {
  return (
    <nav className="navigation">
      <FavoritesContext.Consumer>
        {({ count }) => (
          <Fragment>
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
          </Fragment>
        )}
      </FavoritesContext.Consumer>
    </nav>
  );
};

export default Nav;
