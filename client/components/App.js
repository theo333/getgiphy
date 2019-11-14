import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Search from './Search';
import Nav from './Nav';
import Favorites from './Favorites';

const App = () => {
  return (
    <Fragment>
      <header className="container">
        <Nav />
      </header>
      <section id="content" className="container">
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/favorites" component={Favorites} />
        </Switch>
      </section>
    </Fragment>
  );
};

export default App;
