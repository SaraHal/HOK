import React from 'react';
import { NavLink } from 'react-router-dom';
import { Table, Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import actions from '../../redux/actions';
import dataLoader from '../data-loader-hoc.jsx';

const OrganizationList = (props) => {
    const { list } = props;
    const { match } = props;
    return (
        <Container>
            <div className="panel-heading">
                <h3 className="panel-title" style={{ display: 'inline' }}>
                    ארגונים
                     </h3>
                <NavLink to={`${match.url}/create`} className="btn btn-outline-secondary" style={{ float: 'left' }}> <FontAwesomeIcon icon={faPlus} /> חדש</NavLink>
            </div>
            <Row>
                <Col md="12">
                    <Table borderless hover>
                        <thead>
                            <tr>
                                <th>שם</th>
                                <th>קוד</th>
                            </tr>
                        </thead>
                        <tbody>

                            {list.map(organization =>

                                <tr key={organization._id}>
                                    <td><NavLink to={`${match.url}/${organization._id}`}>{organization.name}</NavLink></td>
                                    <td><NavLink to={`${match.url}/${organization._id}`}>{organization.code}</NavLink></td>
                                    <td><NavLink to={`${match.url}/${organization._id}/customers`}>לקוחות</NavLink></td>
                                    <td><NavLink to={`${match.url}/${organization._id}/projects`}>פרויקטים</NavLink></td>
                                </tr>,
                            )}

                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}

export default dataLoader(OrganizationList, actions.loadOrganizations, 'organizations');
