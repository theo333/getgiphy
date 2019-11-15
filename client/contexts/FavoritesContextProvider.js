/*eslint-disable no-use-before-define*/
import React, { useState } from 'react';
import FavoritesContext from './FavoritesContext';
import { setToStorage, getFromStorage } from '../utils';

const FavoritesContextProvider = props => {
  //**** TODO ? refactor so that are using state instead of favorites, this way can add state.currentSearch
  const initialState = getFromStorage('fav') || [];

  const [favorites, setFavorites] = useState(initialState);

  const count = favorites.length;

  const isFavorite = (state, fav) => {
    if (state) {
      return state.find(x => x.id === fav.id);
    }
    return false;
  };

  const addFavorite = fav => {
    // TODO do I use this anywhere ???
    fav.isFav = true;

    setFavorites(prevState => {
      const newFavorites = isFavorite(prevState, fav) ? prevState : [...prevState, fav];
      setToStorage('fav', newFavorites);
      return newFavorites;
    });
  };

  const removeFavorite = fav => {
    setFavorites(prevState => {
      const newFavorites = prevState.filter(x => x.id !== fav.id);
      setToStorage('fav', newFavorites);
      return newFavorites;
    });
  };

  const toggleFavorite = fav => {
    //eslint-disable-next-line no-unused-expressions
    isFavorite(favorites, fav) ? removeFavorite(fav) : addFavorite(fav);
  };

  const value = {
    favorites,
    count,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite,
  };

  return <FavoritesContext.Provider value={value}>{props.children}</FavoritesContext.Provider>;
};

export default FavoritesContextProvider;
