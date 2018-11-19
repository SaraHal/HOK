import React, { Component } from 'react';

import { StaticNavBar } from './components/TopBar/TopBar';
import Menu from './components/menu/menu.container';
import routes from './components/menu/routes.switch';

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <StaticNavBar />
        <Menu />
        <div id="page-content-wrapper"> {routes}</div>
      </div>
    );
  }
}

export default App;
