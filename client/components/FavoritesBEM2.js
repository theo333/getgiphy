/*eslint-disable camelcase*/
/*eslint-disable indent*/
import React, { Fragment } from 'react';
import FavoritesContext from '../contexts/FavoritesContext';
import FavoriteButton from './FavoriteButton';

const FavoritesBEM2 = () => {
  return (
    <Fragment>
      <h1>My Giphy Favorites</h1>
      <section className="Cards masonry center">
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
                      fixed_height_still,
                      fixed_width_still,
                      // fixed_width_small_still: { url, height, width },
                    },
                  } = gif;
                  return (
                    // <li key={gif.id}>
                    /* TODO show on bottom part of image (CSS Grid)?
                      {title} */

                    <div className="Cards__card masonry-brick" key={gif.id}>
                      {/* TODO serve smaller (still?) images for smaller screen sizes */}
                      {/* <div className="card__content"> */}
                      {/* <img
                        src={fixed_width_still.url}
                        srcSet={
                          `${fixed_height_still.url} ${fixed_height_still.width}w`
                        }
                        sizes={`(max-width: 415px) 200px`}
                        alt={title}
                        className="masonry-img"
                      // height={height}
                      // width={width}
                      /> */}

                      <img
                        src={fixed_height_still.url}
                        // srcSet={
                        //   `${fixed_width_still.url} ${fixed_width_still.width}w`
                        // }
                        // sizes={`(max-width: 415px) 200px`}
                        title="Add photo to favorites"
                        alt={title}
                        className="card__img masonry-img"
                        // height={height}
                        // width={width}
                      />
                      {/* {gif.title} */}
                      <FavoriteButton
                        toggleFavorite={toggleFavorite}
                        isFavorite={isFavorite}
                        gif={gif}
                        buttonTitle="Remove from favorites"
                      />
                      {/* </div> */}
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

export default FavoritesBEM2;
