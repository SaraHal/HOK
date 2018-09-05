import React, { Component } from 'react';
import { Redirect, Switch, CrumbRoute} from 'react-router-dom';

import { StaticNavBar } from './components/TopBar/TopBar';

import OrganizationList from './components/Organization/organization.list';

import { Breadcrumbs } from 'react-breadcrumbs';

class App extends Component {

  render() {
    return (
      <div>
        <StaticNavBar />
        <Breadcrumbs hidden className="demo__crumbs" />
        <div id="page-content-wrapper">
          <Switch>
            <CrumbRoute exact path='/' render={() => <Redirect to="/organizations" />} />
            <CrumbRoute title="ארגונים" path='/organizations' component={OrganizationList}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
