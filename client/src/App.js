import React, { Component } from 'react';

import { StaticNavBar } from './components/TopBar/TopBar';
import Menu from './menu/menuComponent.jsx';
class App extends Component {
  render() {
    return (
      <div>
        <StaticNavBar />
        <Menu/>
      </div>
    );
  }
}

export default App ;
