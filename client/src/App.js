import React, { Component } from 'react';
import { Redirect, Switch } from 'react-router-dom';

import { StaticNavBar } from './components/TopBar/TopBar';

import OrganizationList from './components/Organization/organization.list';
import CreateOrganization from './components/Organization/organization.create';
import ShowOrganization from './components/Organization/organization.show';
import EditOrganization from './components/Organization/organization.edit';

import { Breadcrumbs } from 'react-breadcrumbs';
import CrumbRoute from './crumb-route.jsx';

class App extends Component {

  render() {
    return (
      <div>
        <StaticNavBar />
        <Breadcrumbs hidden className="demo__crumbs" />
        <div id="page-content-wrapper">
          <Switch>
            <CrumbRoute exact path='/' render={() => <Redirect to="/organizations" />} />
            <CrumbRoute title="ארגונים" exact path='/organizations' component={OrganizationList}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
