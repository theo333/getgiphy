import React, { Component, Fragment } from 'react';
import axios from 'axios';

import { apiKey } from '../../.env';

// import SearchForm from './SearchForm';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      gifs: [],
    };
  }

  componentDidMount() {
    document.getElementById('search').focus();
  }

  handleChange = ev => {
    ev.preventDefault();
    this.setState({ search: ev.target.value });
  };

  getGifs = () => {
    const { search } = this.state;
    console.log('handleSubmit search: ', search);
    axios
      .get(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search}&limit=3`)
      .then(({ data: { data } }) => {
        console.log('results: ', data);
        console.log('gifs before: ', this.state.gifs);
        this.setState({ gifs: data });
      })
      .then(() => console.log('gifs after: ', this.state.gifs))
      .catch(error => console.log(error));
  };

  handleSubmit = ev => {
    const { search } = this.state;
    ev.preventDefault();
    this.getGifs();
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { search, gifs } = this.state;
    return (
      <Fragment>
        <form onSubmit={handleSubmit} className="form-group">
          <label htmlFor="search" className="">
            Search
          </label>
          <input id="search" type="text" name="search" value={search} onChange={handleChange} />
          <button type="submit">Search</button>
        </form>
        {gifs.length ? (
          <ul>
            {gifs.map(gif => {
              const { title, images } = gif;
              // eslint-disable-next-line camelcase
              const { fixed_height } = images;
              // eslint-disable-next-line camelcase
              const { url, height, width } = fixed_height;
              return (
                <li key={gif.id}>
                  {title}
                  <img src={url} alt={title} height={height} width={width} />
                </li>
              );
            })}
          </ul>
        ) : (
          ''
        )}
      </Fragment>
    );
  }
}

export default Home;
