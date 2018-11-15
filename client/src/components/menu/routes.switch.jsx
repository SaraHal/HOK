import { Switch, Route} from 'react-router-dom';
import React from 'react';

import OrganizationsList from '../organization/organization.list';
import CreateOrganization from '../organization/organization.create';
import ShowOrganization from '../organization/organization.show';

import CustomersList from '../customer/customer.list';
import CreateCustomer from '../customer/customer.create';
import ShowCustomer from '../customer/customer.show';

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