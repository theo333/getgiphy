/*eslint-disable no-use-before-define*/
import React, { useState } from 'react';
import FavoritesContext from './FavoritesContext';

const FavoritesContextProvider = props => {
  const isFavorite = (state, fav) => {
    console.log('state in isFavorite(): ', state);
    // const allFaves = state.favorites.map(x => x.isFav);
    // console.log('allFaves: ', allFaves)
    // const isFave = state.favorites.find(x => x.isFav === true);
    const isFave = state.favorites.find(x => x.id === fav.id);
    console.log('isFave; ', !!isFave, isFave);
    return isFave;
  };

  const addFavorite = fav => {
    fav.isFav = true;
    setFavorites(prevState => {
      const newFavorites = isFavorite(prevState, fav)
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

  // const toggleFavorite = fav => !isFavorite(favorites, fav);

  // TODO not working - isFavorite is not working ???
  const toggleFavorite = fav => {
    console.log('isFavorite: ', isFavorite(favorites, fav), favorites);
    // const _isFavorite = isFavorite(favorites, fav)
    //   ? 'remove now' //removeFavorite(fav)
    //   : addFavorite(fav);
    // console.log('_isFavorite: ', _isFavorite)
    // return _isFavorite;
    return isFavorite(favorites, fav)
      ? 'remove now' //removeFavorite(fav)
      : addFavorite(fav);
  };

  const initialState = {
    favorites: [],
    addFavorite,
    removeFavorite,
    toggleFavorite,
  };

  const [favorites, setFavorites] = useState(initialState);

  return <FavoritesContext.Provider value={favorites}>{props.children}</FavoritesContext.Provider>;
};

export default FavoritesContextProvider;
