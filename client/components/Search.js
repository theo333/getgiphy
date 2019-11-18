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
  const [error, setError] = useState('');

  const getGifs = async search => {
    try {
      // clear error before starting next search
      if (error) setError('');
      if (search) {
        const response = await axios.get(
          `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search}&limit=30`,
        );
        const results = response.data.data;
        if (!results.length) {
          setError('Sorry no results match your search terms.  Please search again.');
        }
        return results;
      }
      setError('Sorry no results match your search terms.  Please search again.');
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
        <title>Search for Your Favorite GIFs from Giphy | GetGiphy</title>
      </Helmet>
      <div className="Content__header center text-center">
        <h1>Search for Your Favorite GIFs!</h1>
        <SearchForm onSubmit={handleSubmit} error={error} />
        {error ? <h3 className="Content__header__alert">{error}</h3> : ''}
      </div>
      {!error && gifs ? (
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
                      <img src={url} alt={title} title={title} className="card__img" />
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
