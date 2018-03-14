import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Ademo from './components/Ademo'
import Bdemo from './components/Bdemo'
import Cdemo from './components/Cdemo'
import Home from './components/Home'

// Render the main component into the dom
ReactDOM.render((
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path='/Ademo' component={Ademo}></Route>
      <Route path='/Bdemo' component={Bdemo}></Route>
      <Route path='/Cdemo' component={Cdemo}></Route>
    </Route>
  </Router>
), document.getElementById('app'));
