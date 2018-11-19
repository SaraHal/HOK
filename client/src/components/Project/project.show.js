import React from 'react';

import { Link } from 'react-router-dom';

import actions from '../../redux/actions';
import dataLoader from '../data-loader-hoc.jsx';

const Show = props => {
    const { match } = props;
    const { name } = props.current;
    return (
        <div className="container">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        {name}
                    </h3>
                </div>
                <div className="panel-body">
                    <dl>
                        <dt>Name:</dt>
                        <dd>{name}</dd>
                    </dl>
                    <Link to={`${match.url}/edit`} className="btn btn-success">Edit</Link>
                </div>
            </div>
        </div>
    );
}

export default dataLoader(Show, actions.loadProject, 'projects');
