/*eslint-disable no-use-before-define*/
import React, { useState } from 'react';
import FavoritesContext from './FavoritesContext';
import { setToStorage, getFromStorage } from '../utils';

const FavoritesContextProvider = props => {
  const initialState = getFromStorage('fav') || [];

  const [favorites, setFavorites] = useState(initialState);

  const count = favorites.length;

  const isFavorite = fav => favorites.find(x => x.id === fav.id);

  const addFavorite = fav => {
    if (!isFavorite(fav)) {
      const newFavorites = [...favorites, fav];
      setFavorites(newFavorites);
      setToStorage('fav', newFavorites);
    }
  };

  const removeFavorite = fav => {
    const newFavorites = favorites.filter(x => x.id !== fav.id);
    setFavorites(newFavorites);
    setToStorage('fav', newFavorites);
    return newFavorites;
  };

  const toggleFavorite = fav => {
    //eslint-disable-next-line no-unused-expressions
    isFavorite(fav) ? removeFavorite(fav) : addFavorite(fav);
  };

  const value = {
    favorites,
    count,
    isFavorite,
    removeFavorite,
    toggleFavorite,
  };

  return <FavoritesContext.Provider value={value}>{props.children}</FavoritesContext.Provider>;
};

export default FavoritesContextProvider;
