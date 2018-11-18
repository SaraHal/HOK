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
        const { organizationID} = this.props.match.params;
        OrganizationService.getCustomers(organizationID)
            .then(res => {
                this.setState({ customers: res });
            });
    }


    componentWillReceiveProps(nextProps) {
        const {organizationID } = nextProps.match.params;
        if (this.props.match.params.organizationID !== organizationID)
            OrganizationService.getCustomers(organizationID)
                .then(res => {
                    this.setState({ customers: res });
                });
    }

    render() {
        const { match } = this.props;
        const { organizationID } = match.params;
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
                                    <tr key={customer._id}>
                                        <td><NavLink to={`${match.url}/${customer._id}`}>{customer.id}</NavLink></td>
                                        <td><NavLink to={`${match.url}/${customer._id}`}>{customer.lastName} {customer.firstName}</NavLink></td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        );
    }
}

export default CustomerList;
