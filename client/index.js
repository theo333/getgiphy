import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import App from './components/App';
import FavoritesContextProvider from './contexts/FavoritesContextProvider';

const root = document.querySelector('#root');
ReactDOM.render(
  <FavoritesContextProvider>
    <Router>
      <App />
    </Router>
  </FavoritesContextProvider>,
  root,
);
