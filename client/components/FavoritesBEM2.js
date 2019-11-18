/*eslint-disable camelcase*/
/*eslint-disable indent*/
import React, { Fragment } from 'react';
import FavoritesContext from '../contexts/FavoritesContext';
import FavoriteButton from './FavoriteButton';

const FavoritesBEM2 = () => {
  return (
    <Fragment>
      <section className="masonry">
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

                    <div className="masonry-brick" key={gif.id}>
                      {/* TODO serve smaller (still?) images for smaller screen sizes */}
                      {/* <div className="card__content"> */}
                      <img
                        src={fixed_height_still.url}
                        // srcSet={
                        //   `${url} ${width}w`
                        // }
                        // sizes={`(min-width: 415px) ${width}px`}
                        alt={title}
                        className="masonry-img"
                        // height={height}
                        // width={width}
                      />
                      {/* {gif.title}
                        <FavoriteButton
                          toggleFavorite={toggleFavorite}
                          isFavorite={isFavorite}
                          gif={gif}
                        /> */}
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
