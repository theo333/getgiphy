/*eslint-disable indent*/
import React from 'react';

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
        ) : (
          ''
        )
      }
    </FavoritesContext.Consumer>
  );
};

export default Cards;
