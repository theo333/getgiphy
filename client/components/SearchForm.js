import React, { useState, useEffect } from 'react';

const SearchForm = ({ handleSubmit }) => {
  const [search, setSearch] = useState('');

  // on mount, focus on search input
  useEffect(() => {
    document.getElementById('search').focus();
  }, []);

  // const handleSubmit = ev => {
  //   ev.preventDefault();
  //   console.log(search);
  // };

  // const handleChange = ev => {
  //   console.log('search: ', search)
  //   ev.preventDefault();
  //   // this.setState({ search: ev.target.value });
  // };

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
    //   <form id="search-form" className="form-group" onSubmit={handleSubmit}>
    //   <label htmlFor="search" className="">
    //     Search
    //   </label>
    //   <input id="search" type="text" name="search" value={search} onChange={handleChange} />
    //   <button type="submit">Search</button>
    // </form>
  );
};

export default SearchForm;
