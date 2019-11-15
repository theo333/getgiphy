import React, { Component, Fragment } from 'react';
import axios from 'axios';
import MdHeart from 'react-ionicons/lib/MdHeart';

import { apiKey } from '../../.env';
import FavoritesContext from '../contexts/FavoritesContext';
import SearchForm from './SearchForm';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      currentSearch: '', // eslint-disable-line react/no-unused-state
      gifs: [],
    };
  }

  // TODO convert to async-await
  getGifs = search => {
    console.log('handleSubmit search: ', search);
    return axios
      .get(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search}&limit=8`)
      .then(({ data: { data } }) => {
        console.log('results: ', data);
        return data;
      })
      .catch(error => console.log(error));
  };

  handleSubmit = async query => {
    try {
      const gifs = await this.getGifs(query);
      this.setState({ currentSearch: query, gifs }); // eslint-disable-line react/no-unused-state
    } catch (error) {
      console.log('handleSubmit error: ', error);
    }
  };

  render() {
    const { gifs } = this.state;
    return (
      <Fragment>
        <h1>Search for Your Favorite GIFs!</h1>

        <SearchForm onSubmit={this.handleSubmit} />

        {gifs.length ? (
          <Fragment>
            <ul id="gifs-main" className="container">
              {gifs.map(gif => {
                // eslint-disable-next-line camelcase
                const {
                  title,
                  images: {
                    fixed_height: { url, height, width },
                  },
                } = gif;
                return (
                  <li key={gif.id}>
                    {/* TODO show on bottom part of image (CSS Grid), use caption for accessibility?
                    {title} */}
                    <div className="card">
                      <FavoritesContext.Consumer>
                        {({ favorites, toggleFavorite, isFavorite }) => (
                          <Fragment>
                            {console.log('favorites: ', favorites)}
                            <button
                              name="favorite-toggle"
                              type="button"
                              className="btn-heart"
                              onClick={() => toggleFavorite(gif)}
                            >
                              <MdHeart fontSize="25px" color={isFavorite(gif) ? 'red' : 'black'} />
                            </button>
                          </Fragment>
                        )}
                      </FavoritesContext.Consumer>
                      <img src={url} alt={title} height={height} width={width} />
                    </div>
                  </li>
                );
              })}
            </ul>
          </Fragment>
        ) : (
          ''
        )}
      </Fragment>
    );
  }
}

export default Search;
