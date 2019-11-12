import React, { Component, Fragment } from 'react';
import axios from 'axios';

// import SearchForm from './SearchForm';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      gifs: [],
    };
  }

  // on mount, focus on search input
  // useEffect(() => {
  //   document.getElementById('search').focus();
  // }, []);

  handleChange = ev => {
    ev.preventDefault();
    this.setState({ search: ev.target.value });
  };

  handleSubmit = ev => {
    ev.preventDefault();
    console.log('handleSubmit search: ', this.state.search);
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=w60ovrQO7lwrcHZrL9yjXigBdRHXV9cY&q=${
          this.state.search
        }&limit=3`,
      )
      .then(
        ({ data: { data } }) => {
          console.log('results: ', data);
          console.log('gifs before: ', this.state.gifs);
          this.setState({ gifs: data });
        },
        () => console.log('gif after: ', this.state.gifs),
      )
      .then(() => console.log('gifs after2: ', this.state.gifs))
      .catch(error => console.log(error));
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { search } = this.state;
    return (
      <form onSubmit={handleSubmit} className="form-group">
        <label htmlFor="search" className="">
          Search
        </label>
        <input id="search" type="text" name="search" value={search} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default Home;
