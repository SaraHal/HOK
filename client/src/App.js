import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import OrganizationList from './components/Organization/List';

import CreateOrganization from './components/Organization/Create';

import NavBar from './components/TopBar/TopBar';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Organization from './containers/organization.container'
import Customer from './containers/customer.container';


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
          <NavBar></NavBar>
          <div id="page-content-wrapper">
            <Switch>
              <Route exact path='/organization' component={OrganizationList} />
              <Route exact path='/' render={() => <Redirect to="/organization" />} />
              <Route path='/organization/create' component={CreateOrganization} />      
              <Route path={`/customer/:id`} component={Customer} />
              <Route path='/organization/:id' component={Organization} />
            </Switch>
          </div>
        </div>
      </Router >
    );
  }
}

export default App;
