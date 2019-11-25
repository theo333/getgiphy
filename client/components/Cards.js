/*eslint-disable indent*/
/*eslint-disable no-nested-ternary*/
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import MdHeart from 'react-ionicons/lib/MdHeart';

import FavoritesContext from '../contexts/FavoritesContext';
import Card from './Card';

const Cards = ({ gifs, buttonTitle, isSearch, error }) => {
  return (
    <FavoritesContext.Consumer>
      {({ favorites, toggleFavorite, isFavorite, count }) =>
        isSearch ? (
          !error && gifs ? (
            <section className="Cards center">
              {gifs.map(gif => {
                return (
                  <Card
                    key={gif.id}
                    gif={gif}
                    toggleFavorite={toggleFavorite}
                    isFavorite={isFavorite}
                    buttonTitle={buttonTitle}
                  />
                );
              })}
            </section>
          ) : (
            ''
          )
        ) : count ? (
          <Fragment>
            <div className="Cards__favorites-remove text-center">
              Click <MdHeart className="fav-heart" />
              to remove from your favorites!
            </div>
            <section className="Cards center">
              {favorites.map(gif => {
                return (
                  <Card
                    key={gif.id}
                    gif={gif}
                    toggleFavorite={toggleFavorite}
                    isFavorite={isFavorite}
                    buttonTitle={buttonTitle}
                  />
                );
              })}
            </section>
          </Fragment>
        ) : (
          <h2 className="Cards__alert center">
            <span className="Cards__alert__nofav">No Gifs added in your Favorites.</span>
            <br />
            <Link to="/">Search for Gifs</Link>
            <br /> Then click <MdHeart className="nofav-heart" /> to add to Favorites.
          </h2>
        )
      }
    </FavoritesContext.Consumer>
  );
};

export default Cards;
