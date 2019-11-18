import React, { useState, Fragment } from 'react';

const SearchForm = ({ onSubmit }) => {
  const [search, setSearch] = useState('');
  const [currentSearch, setCurrentSearch] = useState('');

  const handleSubmit = ev => {
    ev.preventDefault();
    onSubmit(search);
    setSearch('');
    setCurrentSearch(search);
    console.log(search);
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit} className="Formgroup">
        <input
          className="Formgroup__input"
          type="text"
          name="search"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button className="Formgroup__btn" type="submit">
          Search
        </button>
      </form>
      {currentSearch ? <h2>Search results for {`"${currentSearch}"`}</h2> : ''}
    </Fragment>
  );
};

export default SearchForm;
