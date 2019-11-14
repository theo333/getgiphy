import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

// import SearchForm from './SearchForm';

const Home = () => {
  const [search, setSearch] = useState('');
  const [gifArray, setGifArray] = useState([]);

  // on mount, focus on search input
  useEffect(() => {
    document.getElementById('search').focus();
  }, []);

  const handleSubmit = ev => {
    ev.preventDefault();
    console.log(search);
    axios
      .get(
        `https://api.giphy.com/v1/gifs/search?api_key=w60ovrQO7lwrcHZrL9yjXigBdRHXV9cY&q=${search}&limit=3`,
      )
      .then(({ data: { data } }) => {
        console.log('results: ', data);
        console.log('gifs before: ', gifArray);
        setGifArray(data);
      })
      .then(() => console.log('gifs after: ', gifArray))
      .catch(error => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit} className="form-group">
      <label htmlFor="search" className="">
        Search
      </label>
      <input
        id="search"
        type="text"
        name="search"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Home;
