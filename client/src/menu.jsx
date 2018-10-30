import React from 'react';
import { connect } from 'react-redux'
import { SideNav, Chevron, Icon } from 'react-side-nav';
import { Switch, Route, Link } from 'react-router-dom';

import menuService from './menuService';
import OrganizationsList from './components/Organization/organization.list';
import CreateOrganization from './components/Organization/organization.create';
import ShowOrganization from './components/Organization/organization.show';

import '../node_modules/react-side-nav/dist/themes.css';

const NavLink = props =>
    (<Link to={props.to} {...props}><i className={`fa ${props.icon}`} />{props.label}</Link>);

const Menu = props => (<div>
    {JSON.stringify(props.items)}
    <SideNav
        items={props.items}
        linkComponent={NavLink}
        chevronComponent={Chevron}
        iconComponent={Icon} />
    <Switch>
        <Route path="/" exact component={() => (<div></div>)} />
        <Route path="/organizations" exact component={OrganizationsList} />
        <Route path="/organizations/create" exact component={CreateOrganization} />
        <Route path="/organizations/:id" exact component={ShowOrganization} />
    </Switch>
</div>);

export default connect(state => {
    const items = [...menuService];
    state.organizations.forEach((o, i) => {
        items[0].items.push({
            id: o._id,
            label: o.name,
            icon: 'fas fa-car',
            link: '/organizations/' + o._id,
        });
    });
    return { items };
})(Menu);