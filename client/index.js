import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import App from './components/App';

const root = document.querySelector('#root');
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  root,
);
