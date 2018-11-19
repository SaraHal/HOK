import React from 'react';
import { Link } from 'react-router-dom';
import actions from '../../redux/actions';
import dataLoader from '../data-loader-hoc.jsx';

export default dataLoader(props => {
  const { match, current } = props;
  return <div className="container">
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">
          {current.name}
        </h3>
      </div>
      <div className="panel-body">

        <dl>
          <dt>Name:</dt>
          <dd>{current.name}</dd>
          <dt>Code:</dt>
          <dd>{current.code}</dd>
        </dl>
        <Link to={`${match.url}/edit`} className="btn btn-success">Edit</Link>
      </div>
    </div>
  </div>;
}, actions.loadOrganization, 'organizations');