import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import actions from '../../redux/actions';
import dataLoader from '../data-loader-hoc.jsx';

const ProgramList = props => {
    const { list, match } = props;
    return (
        <div className="container">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title" style={{ display: 'inline' }}>תוכניות</h3>
                    <Link to={`${match.url}/create`} style={{ float: 'left' }} className="btn btn-outline-secondary" >
                        <FontAwesomeIcon icon={faPlus} /> חדש
                    </Link>
                </div>
                <div className="panel-body">
                    <Table borderless hover>
                        <thead><tr><th>סכום</th></tr></thead>
                        <tbody>
                            {list.map(program =>
                                <tr>
                                    <td><Link to={`/customer/${program.customer}`}>{program.sum}</Link></td>
                                    <td><Link to={`/customer/${program.customer}`}>{program.isActive}</Link></td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
}

export default dataLoader(ProgramList, actions.loadPrograms, 'programs');
