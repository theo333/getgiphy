import React, { useState, useEffect } from 'react';

const Home = () => {
  const [search, setSearch] = useState('');

  // on mount, focus on search input
  useEffect(() => {
    document.getElementById('search').focus();
  }, []);

  const handleSubmit = ev => {
    ev.preventDefault();
    console.log(search);
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
    </form>
  );
};

export default Home;
