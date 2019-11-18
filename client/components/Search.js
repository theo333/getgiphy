/*eslint-disable consistent-return*/
/*eslint-disable camelcase*/
import React, { useState, Fragment } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';

import { apiKey } from '../../.env';
import FavoritesContext from '../contexts/FavoritesContext';
import SearchForm from './SearchForm';
import FavoriteButton from './FavoriteButton';

const Search = () => {
  const [gifs, setGifs] = useState([]);

  const getGifs = async search => {
    try {
      const response = await axios.get(
        `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search}&limit=13`,
      );
      const results = response.data.data;
      return results;
    } catch (error) {
      console.log('getGifs error: ', error);
    }
  };

  const handleSubmit = async query => {
    try {
      const newGifs = await getGifs(query);
      setGifs(newGifs);
    } catch (error) {
      console.log('Search handleSubmit error: ', error);
    }
  };

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Search for Your Favorite GIFs from Giphy | GetGiphy</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="Content__header center text-center">
        <h1>Search for Your Favorite GIFs!</h1>
        <SearchForm onSubmit={handleSubmit} />
      </div>
      {gifs.length ? (
        <section className="Cards">
          <FavoritesContext.Consumer>
            {({ toggleFavorite, isFavorite }) => (
              <Fragment>
                {gifs.map(gif => {
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
                        buttonTitle="Add or Remove photo from favorites"
                      />
                    </div>
                  );
                })}
              </Fragment>
            )}
          </FavoritesContext.Consumer>
        </section>
      ) : (
        ''
      )}
    </Fragment>
  );
};

export default Search;
