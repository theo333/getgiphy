import React, { createContext } from 'react';

const FavoritesContext = createContext({
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
});

export default FavoritesContext;
