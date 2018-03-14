require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import { Link } from 'react-router'

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice"> 欢迎来到React的奇妙世界</div>
        <ul className="page">
          <li><Link to="/Ademo">Ademo组建页面</Link></li>
          <li><Link to="/Bdemo">Bdemo组建页面</Link></li>
          <li><Link to="/Cdemo">Cdemo组建页面</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
