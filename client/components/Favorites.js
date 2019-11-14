import React from 'react';
import FavoritesContext from '../contexts/FavoritesContext';

const Favorites = () => {
  return (
    <FavoritesContext.Consumer>
      {({ favorites, removeFavorite, toggleFavorite }) =>
        favorites.length ? (
          <ul id="gifs-main" className="container">
            {console.log('favorites page: ', favorites)}
            {favorites.map(gif => {
              const { title, images } = gif;
              // eslint-disable-next-line camelcase
              const { fixed_height } = images;
              // eslint-disable-next-line camelcase
              const { url, height, width } = fixed_height;
              return (
                <li key={gif.id}>
                  {/* TODO show on bottom part of image (CSS Grid), use caption for accessibility?
                      {title} */}
                  <div>
                    <button name="fav" type="button" onClick={() => removeFavorite(gif)}>
                      -
                    </button>
                    <button name="fav" type="button" onClick={() => toggleFavorite(gif)}>
                      Toggle
                    </button>
                  </div>
                  <img src={url} alt={title} height={height} width={width} />
                </li>
              );
            })}
          </ul>
        ) : (
          ''
        )
      }
    </FavoritesContext.Consumer>
  );
};

export default Favorites;
