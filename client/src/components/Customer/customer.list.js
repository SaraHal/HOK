import React, { Component } from 'react';

import CreateCustomer from './customer.create';
import { NavLink, Switch, CrumbRoute } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Table } from 'reactstrap';
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import OrganizationService from '../../services/organization.service';

class CustomerList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            customers: []
        };
    }

    componentDidMount() {
        const { id: organizationID } = this.props.match.params;
        console.log(this.props);
        OrganizationService.getCustomers(organizationID)
            .then(res => {
                this.setState({ customers: res });
                console.log(this.state.customers);
            });
    }

    render() {
        const { match } = this.props;
        const { id: organizationID } = match.params;
        return (

            <div className="container">
                <div className="panel panel-default">

                    <div className="panel-heading">
                        <h3 className="panel-title" style={{ display: 'inline' }}>
                            לקוחות
                         </h3>
                        <NavLink to={`/organizations/${organizationID}/customers/create`} style={{ float: 'left' }} className="btn btn-outline-secondary" >
                            <FontAwesomeIcon icon={faPlus} /> לקוח חדש</NavLink>
                    </div>
                    <div className="panel-body">


                        <Table borderless hover>
                            <thead>
                                <tr>
                                    <th>ת.ז.</th>
                                    <th>שם</th>

                                </tr>
                            </thead>
                            <tbody>
                                {this.state.customers.map(customer =>
                                    <tr>
                                        <td><NavLink to={`/customers/${customer._id}`}>{customer.id}</NavLink></td>
                                        <td><NavLink to={`/customers/${customer._id}`}>{customer.lastName} {customer.firstName}</NavLink></td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </div>
                </div>
                <Switch>
                    <CrumbRoute title="הוסף לקוח" path={`${match.path}/customers/create`} component={CreateCustomer} />
                </Switch>
            </div>
        );
    }
}

export default CustomerList;
