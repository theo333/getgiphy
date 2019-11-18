import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Search from './Search';
import Header from './Header';
import Footer from './Footer';
import Favorites from './Favorites';

const App = () => {
  return (
    <Fragment>
      <Header />
      <main className="Content center">
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/favorites" component={Favorites} />
        </Switch>
      </main>
      <Footer />
    </Fragment>
  );
};

export default App;
