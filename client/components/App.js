import React, { Fragment, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Search from './Search';
import Nav from './Nav';
import Favorites from './Favorites';
import FavoritesContextProvider from '../contexts/FavoritesContextProvider';

const App = () => {
  return (
    <Fragment>
      <header className="container">
        <Nav />
      </header>
      <section id="content" className="container">
        <Switch>
          <FavoritesContextProvider>
            <Route exact path="/" component={Search} />
            <Route exact path="/favorites" component={Favorites} />
          </FavoritesContextProvider>
        </Switch>
      </section>
    </Fragment>
  );
};

export default App;
