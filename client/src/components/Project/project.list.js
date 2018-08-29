import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import OrganizationService from '../../services/organization.service';

class ProjectsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: []
        };
    }

    componentDidMount() {
        const { id: organizationID } = this.props.match.params;
        console.log(this.props);
        OrganizationService.getProjects(organizationID)
            .then(res => {
                this.setState({ projects: res });
            });
    }


    render() {
        const { id: organizationID } = this.props.match.params;
        return (

            <div className="container">
                <div className="panel panel-default">

                    <div className="panel-heading">
                        <Link to={`/organizations/${organizationID}/projects/create`} style={{ float: 'left' }} className="btn btn-outline-secondary" >
                            <FontAwesomeIcon icon={faPlus} /> פרויקט חדש</Link>
                    </div>
                    <div className="panel-body">
                        <Table borderless hover>
                            <thead>
                                <tr>
                                    <th>שם</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.projects.map(project =>
                                    <tr>
                                        <td><Link to={`/projects/${project._id}`}>{project.id}</Link></td>                                        
                                        <td><Link to={`/projects/${project._id}`}>{project.name}</Link></td>
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

export default ProjectsList;
