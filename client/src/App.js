import React, { Component } from 'react';
import { BrowserRouter as Redirect, Switch } from 'react-router-dom';

import { StaticNavBar } from './components/TopBar/TopBar';

import OrganizationList from './components/Organization/List';

import { Breadcrumbs } from 'react-breadcrumbs';
import CrumbRoute from './crumb-route.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <StaticNavBar />
        <Breadcrumbs className="demo__crumbs" />
        <div id="page-content-wrapper">
          <Switch>
            <CrumbRoute exact path='/' render={() => <Redirect to="/organizations" />} />
            <CrumbRoute title="ארגונים" path='/organizations' component={OrganizationList} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
