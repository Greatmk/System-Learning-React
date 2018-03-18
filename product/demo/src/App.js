import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router'

class App extends Component {
  render() {
    let to = `/Cdemo/C组建/121`;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <ul>
            <li><Link to="/Ademo" activeClassName='active'>Ademo组建页面</Link></li>
            <li><Link to="/Bdemo" activeClassName='active'>Bdemo组建页面</Link></li>
            <li><Link to={to} activeClassName='active'>Cdemo组建页面</Link></li>
          </ul>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
