import React, { useState, Fragment } from 'react';
import MdHeart from 'react-ionicons/lib/MdHeart';

const SearchForm = ({ onSubmit, error }) => {
  const [search, setSearch] = useState('');
  const [currentSearch, setCurrentSearch] = useState('');

  const handleSubmit = ev => {
    ev.preventDefault();
    onSubmit(search);
    setSearch('');
    setCurrentSearch(search);
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit} className="Formgroup">
        <input
          className="Formgroup__input"
          type="text"
          name="search"
          value={search}
          aria-label="Search"
          onChange={e => setSearch(e.target.value)}
        />
        <button className="Formgroup__btn" type="submit">
          Search
        </button>
        {currentSearch ? (
          <div className="Form-results-text">
            <h2 className="Form-results-text__search">
              Search results for
              <span className="Form-results-text__search__query">{` "${currentSearch}"`}</span>
            </h2>
            {!error ? (
              <div className="Form-results-text__instructions">
                Select <MdHeart className="nofav-heart" />
                to add / remove from your favorites!
              </div>
            ) : (
              ''
            )}
          </div>
        ) : (
          ''
        )}
      </form>
    </Fragment>
  );
};

export default SearchForm;
