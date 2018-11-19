import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Table } from 'reactstrap';
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import actions from '../../redux/actions';
import dataLoader from '../data-loader-hoc.jsx';

const CustomerList = (props) => {
    const { match, list } = props;
    const { organizationID } = match.params;
    return (
        <div className="container">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title" style={{ display: 'inline' }}>לקוחות</h3>
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
                            {list.map(customer =>
                                <tr key={customer._id}>
                                    <td><NavLink to={`${match.url}/${customer._id}`}>{customer.id}</NavLink></td>
                                    <td><NavLink to={`${match.url}/${customer._id}`}>{customer.lastName} {customer.firstName}</NavLink></td>
                                    <td><NavLink to={`${match.url}/${customer._id}/programs`}>תוכניות</NavLink></td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};
export default dataLoader(CustomerList, actions.loadCustomers, 'customers');
