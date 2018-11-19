import React from 'react';
import { Link } from 'react-router-dom';

import actions from '../../redux/actions';
import dataLoader from '../data-loader-hoc.jsx';

const Show = props => {
    const { match } = props;
    const { id, firstName, lastName } = props.current;

    return (
        <div className="container">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        {firstName} {lastName}
                    </h3>
                </div>
                <div className="panel-body">
                    <dl>
                        <dt>ID:</dt>
                        <dd>{id}</dd>
                        <dt>First Name:</dt>
                        <dd>{firstName}</dd>
                        <dt>Last Name:</dt>
                        <dd>{lastName}</dd>
                    </dl>
                    <Link to={`${match.url}/edit`} className="btn btn-success">Edit</Link>&nbsp;
                    </div>
            </div>
        </div>
    );
}

export default dataLoader(Show, actions.loadCustomer, 'customers');
