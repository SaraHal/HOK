import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import {StaticNavBar} from './components/TopBar/TopBar';

import OrganizationList from './components/Organization/List';
import Organization from './containers/organization.container';
import CreateOrganization from './components/Organization/Create';


class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <Router>
        <div>
          <StaticNavBar/>
          <div id="page-content-wrapper">
            <Switch>
              <Route exact  path='/' render={() => <Redirect to="/organization" />} />
              <Route exact path='/organization' component={OrganizationList} />
              <Route path='/organization/create' component={CreateOrganization} />   
              <Route path='/organization/:id' component={Organization} /> 
            </Switch>
          </div>
        </div>
      </Router >
    );
  }
}

export default App;
