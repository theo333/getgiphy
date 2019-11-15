import { createContext } from 'react';

const FavoritesContext = createContext({
  favorites: [],
});

export default FavoritesContext;
