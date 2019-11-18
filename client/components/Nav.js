import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import MdSearch from 'react-ionicons/lib/MdSearch';
import MdHeartOutline from 'react-ionicons/lib/MdHeartOutline';
import FavoritesContext from '../contexts/FavoritesContext';

const Nav = () => {
  return (
    <nav className="Siteheader__nav">
      <FavoritesContext.Consumer>
        {({ count }) => (
          <Fragment>
            <div className="nav__item">
              <NavLink exact to="/" role="button">
                <MdSearch fontSize="25px" color="black" />
                Search
              </NavLink>
            </div>
            <div className="nav__item">
              <NavLink exact to="/favorites" role="button">
                <MdHeartOutline fontSize="25px" color="black" />
                Favorites
              </NavLink>
            </div>
            <span className="nav__item__count">{count}</span>
          </Fragment>
        )}
      </FavoritesContext.Consumer>
    </nav>
  );
};

export default Nav;
