import React, { Fragment } from 'react';
import FavoritesContext from '../contexts/FavoritesContext';
import FavoriteButton from './FavoriteButton';

const FavoritesBEM = () => {
  return (
    <Fragment>
      <section className="Cards">
        <FavoritesContext.Consumer>
          {({ favorites, toggleFavorite, isFavorite, count }) =>
            count ? (
              <Fragment>
                {/* <div className="Cards__list"> */}
                {/* <ul className="Cards__list"> */}
                {console.log('favorites page: ', favorites)}
                {favorites.map(gif => {
                  const {
                    title,
                    images: {
                      fixed_height: { url, height, width },
                      // fixed_width_still: { url, height, width },
                      // fixed_width_small_still: { url, height, width },
                    },
                  } = gif;
                  return (
                    // <li key={gif.id}>
                    /* TODO show on bottom part of image (CSS Grid)?
                      {title} */
                    // <img
                    //   src={url}
                    //   // srcSet={}
                    //   className="card_img"
                    //   alt={title}
                    // // height={height}
                    // // width={width}
                    // />
                    <div className="Cards__card" key={gif.id}>
                      {/* TODO serve smaller (still?) images for smaller screen sizes */}
                      <div className="card__content">
                        <img
                          src={url}
                          // srcSet={}
                          className="card_img"
                          alt={title}
                          // height={height}
                          // width={width}
                        />
                        {gif.title}
                        <FavoriteButton
                          toggleFavorite={toggleFavorite}
                          isFavorite={isFavorite}
                          gif={gif}
                        />
                      </div>
                    </div>
                    // </li>
                  );
                })}
                {/* </ul> */}
                {/* </div> */}
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

export default FavoritesBEM;
