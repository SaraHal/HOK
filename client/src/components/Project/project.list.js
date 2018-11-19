import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import actions from '../../redux/actions';
import dataLoader from '../data-loader-hoc.jsx';

const ProjectsList = (props) => (
    <div className="container">
        <div className="panel panel-default">
            <div className="panel-heading">
                <Link to={`/organizations/${props.match.params.organizationID}/projects/create`} style={{ float: 'left' }} className="btn btn-outline-secondary" >
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
                        {props.list.map(project =>
                            <tr key={project._id}>
                                <td><Link to={`${props.match.url}/${project._id}`}>{project.id}</Link></td>
                                <td><Link to={`${props.match.url}/${project._id}`}>{project.name}</Link></td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        </div>
    </div>
);
export default dataLoader(ProjectsList, actions.loadProjects, 'projects');
