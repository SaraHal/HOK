import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import { Table, Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import ShowOrganization from './Show';
import CreateOrganization from './Create';
import CustomersList from '../Customer/List';
import ProjectsList from '../Project/List';

import OrganizationService from '../../services/organization.service';
import CrumbRoute from '../../crumb-route.jsx';

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
        const { match } = this.props;
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

                                {organizations.map(organization =>

                                    <tr key={organization._id}>
                                        <td><NavLink to={`${match.url}/${organization._id}`}>{organization.name}</NavLink></td>
                                        <td><NavLink to={`${match.url}/${organization._id}`}>{organization.code}</NavLink></td>
                                        <td><NavLink to={`${match.url}/${organization._id}/customers`}>לקוחות</NavLink></td>
                                        <td><NavLink to={`${match.url}/${organization._id}/projects`}>פרויקטים</NavLink></td>
                                    </tr>
                                )}

                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <Switch>
                <Route path="/" exact render={ props => <span>Home content...</span> } />       

                    <CrumbRoute title="חדש" path={`${match.url}/create`} component={CreateOrganization} />
                    <CrumbRoute path={`${match.url}/:id`} component={ShowOrganization} />
                    <CrumbRoute title="לקוחות" path={`${match.url}/:id/customers`} component={CustomersList} />
                    <CrumbRoute title="פרויקטים" path={`${match.url}/:id/projects`} component={ProjectsList} />
                </Switch>
            </Container>
        );
    }
}

export default OrganizationList;
