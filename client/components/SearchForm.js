import React, { useState, Fragment } from 'react';
import MdHeartOutline from 'react-ionicons/lib/MdHeartOutline';

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
        <label htmlFor="search" className="Formgroup__label">
          Search
        </label>
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
        {currentSearch ? (
          <div className="Form-results-text">
            <h2 className="Form-results-text__search">Search results for {`"${currentSearch}"`}</h2>
            {!error ? (
              <div className="Form-results-text__instructions">
                Select <MdHeartOutline fontSize="1.5em" color="red" /> to add / remove from your
                favorites!
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
