import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Table, Container, Row, Col } from 'reactstrap';
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
        const { id: organizationID } = this.props.match.params;
        return (

            <div class="container">
                <div class="panel panel-default">

                    <div class="panel-heading">
                        <h3 class="panel-title" style={{ display: 'inline' }}>
                            לקוחות
                         </h3>
                        <Link to={`/organization/${organizationID}/customer/create`} style={{ float: 'left' }} class="btn btn-outline-secondary" >
                            <FontAwesomeIcon icon={faPlus} /> לקוח חדש</Link>
                    </div>
                    <div class="panel-body">


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
                                        <td><Link to={`/customer/${customer._id}`}>{customer.id}</Link></td>                                        
                                        <td><Link to={`/customer/${customer._id}`}>{customer.lastName} {customer.firstName}</Link></td>
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
