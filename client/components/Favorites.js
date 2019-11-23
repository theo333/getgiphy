/*eslint-disable camelcase*/
/*eslint-disable indent*/
import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import FavoritesContext from '../contexts/FavoritesContext';
import FavoriteButton from './FavoriteButton';

const Favorites = () => {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Save Your Favorite Gifs | GetGiphy</title>
        <meta
          name="description"
          content="Save your favorite Gifs from GIPHY. They have the most popular and latest GIFs and Animated Stickers online."
        />
      </Helmet>
      <h1 className="text-center">My Giphy Favorites</h1>
      <section className="Cards center">
        <FavoritesContext.Consumer>
          {({ favorites, toggleFavorite, isFavorite, count }) =>
            count ? (
              <Fragment>
                {favorites.map(gif => {
                  const {
                    title,
                    images: {
                      fixed_height_still: { url },
                    },
                  } = gif;
                  return (
                    <div className="Cards__card" key={gif.id}>
                      <img src={url} alt={title} className="card__img" />
                      <FavoriteButton
                        toggleFavorite={toggleFavorite}
                        isFavorite={isFavorite}
                        gif={gif}
                        buttonTitle="Remove from favorites"
                      />
                      <div className="card__info">{title}</div>
                    </div>
                  );
                })}
              </Fragment>
            ) : (
              ''
            )
          }
        </FavoritesContext.Consumer>
      </section>
    </Fragment>
  );
};

export default Favorites;
