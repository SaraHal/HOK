import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Table, Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import OrganizationService from '../../services/organization.service';

class OrganizationList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            organizations: []
        };
    }

    componentDidMount() {
        OrganizationService.getList()
            .then(res => {
                this.setState({ organizations: res });
            });
    }


    render() {
        const { organizations } = this.state;
        return (
            <Container>

                <div className="panel-heading">
                    <h3 className="panel-title" style={{ display: 'inline' }}>
                        ארגונים
                         </h3>
                    <Link to="organization/create" className="btn btn-outline-secondary" style={{ float: 'left' }}> <FontAwesomeIcon icon={faPlus} /> חדש</Link>
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

                                {organizations.map(organization =>

                                    <tr key={organization._id}>
                                        <td>
                                            <Link to={`/organization/${organization._id}`}>
                                                {organization.name}
                                            </Link></td>
                                        <td>
                                            <Link to={`/organization/${organization._id}`}>
                                                {organization.code}
                                            </Link></td>
                                        <td><Link to={`/organization/${organization._id}/customer`}>לקוחות</Link></td>
                                        <td><Link to={`/organization/${organization._id}/project`}>פרויקטים</Link></td>
                                    </tr>
                                )}

                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default OrganizationList;
