import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import FavoritesContext from '../contexts/FavoritesContext';

const Nav = () => {
  return (
    <nav className="navigation">
      {/* TODO convert ul => div */}
      <FavoritesContext.Consumer>
        {({ count }) => (
          <Fragment>
            {/* <div>
              <NavLink
                to="/"
              // aria-
              >
                Search
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/favorites"
              // aria-
              >
                Favorites
              </NavLink>
            </div> */}
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
