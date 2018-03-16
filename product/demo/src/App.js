import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <ul>
            <li><Link to="/Ademo" style={{ color: 'yellowgreen' }}>Ademo组建页面</Link></li>
            <li><Link to="/Bdemo">Bdemo组建页面</Link></li>
            <li><Link to="/Cdemo">Cdemo组建页面</Link></li>
          </ul>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
