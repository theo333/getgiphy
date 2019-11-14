import React, { Component, Fragment } from 'react';
import axios from 'axios';

import { apiKey } from '../../.env';
import FavoritesContext from '../contexts/FavoritesContext';
// import SearchForm from './SearchForm';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: '', // move to SearchForm - use hooks
      currentSearch: '', // eslint-disable-line react/no-unused-state
      gifs: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getGifs = this.getGifs.bind(this);
  }

  componentDidMount() {
    // replace with useRef to grab the element - move to SearchForm useEffect
    document.getElementById('search').focus();
  }

  // TODO move to SearchForm
  handleChange = ev => {
    ev.preventDefault();
    this.setState({ search: ev.target.value });
  };

  // TODO convert to async-await
  getGifs = () => {
    const { search } = this.state;
    console.log('handleSubmit search: ', search);
    return axios
      .get(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search}&limit=8`)
      .then(({ data: { data } }) => {
        console.log('results: ', data);
        return data;
      })
      .catch(error => console.log(error));
  };

  // TODO pass as prop to SearchForm
  // handleSubmit = async (query, ev) => {
  //   try {
  //     const gifs = await this.getGifs(query);
  //     this.setState({ currentSearch: query, gifs }); // eslint-disable-line react/no-unused-state
  //   } catch (error) {
  //     console.log('handleSubmit error: ', error);
  //   }
  // };

  handleSubmit = async ev => {
    try {
      ev.preventDefault();
      const gifs = await this.getGifs();
      console.log('gifs in handleSubmit: ', gifs);
      this.setState(
        prevState => ({ currentSearch: prevState.search, gifs }),
        () => console.log('state: ', this.state),
      ); // eslint-disable-line react/no-unused-state
    } catch (error) {
      console.log('handleSubmit error: ', error);
    }
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { search, gifs } = this.state;
    return (
      <Fragment>
        <h1>Search for Your Favorite GIFs!</h1>

        {/* TODO move to SearchForm component */}
        {/* <SearchForm handleSubmit={this.handleSubmit} /> */}
        <form id="search-form" className="form-group" onSubmit={handleSubmit}>
          <label htmlFor="search" className="">
            Search
          </label>
          <input id="search" type="text" name="search" value={search} onChange={handleChange} />
          <button type="submit">Search</button>
        </form>

        {gifs.length ? (
          <Fragment>
            <h2>Search results for {`"${search}"`}</h2>
            <ul id="gifs-main" className="container">
              {gifs.map(gif => {
                const { title, images } = gif;
                // eslint-disable-next-line camelcase
                const { fixed_height } = images;
                // eslint-disable-next-line camelcase
                const { url, height, width } = fixed_height;
                return (
                  <li key={gif.id}>
                    {/* TODO show on bottom part of image (CSS Grid), use caption for accessibility?
                    {title} */}
                    <FavoritesContext.Consumer>
                      {({ favorites, addFavorite, removeFavorite }) => (
                        <div>
                          {console.log('favorites, addFavorite, removeFavorite: ', favorites)}
                          <button name="fav" type="button" onClick={() => addFavorite(gif)}>
                            Add to Favorites
                          </button>
                          {/* <p>Favorites: {favorites}</p> */}
                        </div>
                      )}
                    </FavoritesContext.Consumer>
                    <img src={url} alt={title} height={height} width={width} />
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
