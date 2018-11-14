import { Switch, Route} from 'react-router-dom';
import React from 'react';

import OrganizationsList from '../components/Organization/organization.list';
import CreateOrganization from '../components/Organization/organization.create';
import ShowOrganization from '../components/Organization/organization.show';

import CustomersList from '../components/Customer/customer.list';
import CreateCustomer from '../components/Customer/customer.create';
import ShowCustomer from '../components/Customer/customer.show';

export default (
    <Switch>
        <Route path="/" exact component={() => (<div/>)} />
        <Route path="/organizations" exact component={OrganizationsList} />
        <Route path="/organizations/create" exact component={CreateOrganization} />
        <Route path="/organizations/:id" exact component={ShowOrganization} />
        <Route path="/customers" exact component={CustomersList} />
        <Route path="/customers/create" exact component={CreateCustomer} />
        <Route path="/customers/:id" exact component={ShowCustomer} />
    </Switch>
)