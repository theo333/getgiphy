/*eslint-disable consistent-return*/
/*eslint-disable camelcase*/
/*eslint-disable import/no-unresolved*/
import React, { useState, Fragment } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';

import { apiKey } from '../../.env';
import SearchForm from './SearchForm';
import Cards from './Cards';

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
      /*eslint-disable-next-line no-console*/
      console.log('getGifs error: ', error);
    }
  };

  const handleSubmit = async query => {
    try {
      const newGifs = await getGifs(query);
      setGifs(newGifs);
    } catch (error) {
      /*eslint-disable-next-line no-console*/
      console.log('Search handleSubmit error: ', error);
    }
  };

  const buttonTitle = 'Add or Remove photo from favorites';

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
      <Cards gifs={gifs} buttonTitle={buttonTitle} error={error} isSearch />
    </Fragment>
  );
};

export default Search;
