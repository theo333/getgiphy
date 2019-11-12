import React, { Fragment } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';

const App = () => {
  return (
    <Fragment>
      <header>{/* <Nav /> */}</header>
      <section id="content">
        <Router>
          <Switch>
            <Route path="/" component={Home} />
            {/* <Route path='/favorites' component={Favorites} /> */}
          </Switch>
        </Router>
      </section>
    </Fragment>
  );
};

export default App;
