/*eslint-disable no-use-before-define*/
import React, { useState } from 'react';
import FavoritesContext from './FavoritesContext';

const FavoritesContextProvider = props => {
  const isFavorite = (state, fav) => {
    if (state.favorites) {
      console.log('favorites in isFavorite', state.favorites);
      return state.favorites.find(x => x.id === fav.id);
    }
    return false;
  };

  const addFavorite = fav => {
    // TODO do I use this anywhere ???
    fav.isFav = true;
    setFavorites(prevState => {
      const newFavorites = isFavorite(prevState, fav)
        ? prevState.favorites
        : [...prevState.favorites, fav];
      setToStorage('fav', newFavorites);
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

  const toggleFavorite = fav => {
    if (isFavorite(favorites, fav)) {
      console.log('removed: ', fav.id);
      removeFavorite(fav);
    } else {
      console.log('added: ', fav.id);
      addFavorite(fav);
    }
  };

  const setToStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const getFromStorage = key => JSON.parse(localStorage.getItem(key));

  //**** TODO refactor so that are using state instead of favorites, this way can add state.currentSearch
  const initialState = {
    favorites: getFromStorage('fav') || [],
  };

  const [favorites, setFavorites] = useState(initialState);

  const value = {
    favorites: favorites.favorites,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite,
  };

  return <FavoritesContext.Provider value={value}>{props.children}</FavoritesContext.Provider>;
};

export default FavoritesContextProvider;
