import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import './index.css';
import App from './App';
import Home from './Home'
import Ademo from './Ademo'
import Bdemo from './Bdemo'
import Cdemo from './Cdemo'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path='/Ademo' component={Ademo}></Route>
            <Route path='/Bdemo' component={Bdemo}></Route>
            <Route path='/Cdemo' component={Cdemo}></Route>
        </Route>
    </Router>  
), document.getElementById('root'));

registerServiceWorker();
