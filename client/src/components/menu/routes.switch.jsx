import { Switch, Route} from 'react-router-dom';
import React from 'react';

import OrganizationsList from '../organization/organization.list';
import CreateOrganization from '../organization/organization.create';
import ShowOrganization from '../organization/organization.show';
import EditOrganization from '../organization/organization.edit';

import CustomersList from '../customer/customer.list';
import CreateCustomer from '../customer/customer.create';
import ShowCustomer from '../customer/customer.show';
import EditCustomer from '../customer/customer.edit';

export default (
    <Switch>
        <Route path="/" exact component={() => (<div/>)} />
        <Route path="/organizations" exact component={OrganizationsList} />
        <Route path="/organizations/create" exact component={CreateOrganization} />
        <Route path="/organizations/:organizationID/edit" exact component={EditOrganization} />
        <Route path="/organizations/:organizationID" exact component={ShowOrganization} />
        <Route path="/organizations/:organizationID/customers" exact component={CustomersList} />
        <Route path="/organizations/:organizationID/customers/create" exact component={CreateCustomer} />
        <Route path="/organizations/:organizationID/customers/:customerID" exact component={ShowCustomer} />
        <Route path="/organizations/:organizationID/customers/:customerID/edit" exact component={EditCustomer} />
    </Switch>
)