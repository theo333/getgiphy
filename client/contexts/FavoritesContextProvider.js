/*eslint-disable no-use-before-define*/
import React, { useState } from 'react';
import FavoritesContext from './FavoritesContext';

const FavoritesContextProvider = props => {
  const addFavorite = fav => {
    setFavorites(prevState => {
      const newFavorites = prevState.favorites.find(x => x.id === fav.id)
        ? prevState.favorites
        : [...prevState.favorites, fav];

      return {
        ...prevState,
        favorites: newFavorites,
      };
    });
  };

  const removeFavorite = fav => {
    setFavorites(prevState => {
      const newState = {
        ...prevState,
        favorites: prevState.favorites.filter(x => x.id !== fav.id),
      };
      return newState;
    });
  };

  const initialState = {
    favorites: [],
    addFavorite,
    removeFavorite,
  };

  const [favorites, setFavorites] = useState(initialState);

  return <FavoritesContext.Provider value={favorites}>{props.children}</FavoritesContext.Provider>;
};

export default FavoritesContextProvider;
