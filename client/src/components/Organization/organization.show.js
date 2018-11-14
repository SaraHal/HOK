import React, { Component } from 'react';
import {Link } from 'react-router-dom';

import OrganizationService from '../../services/organization.service';


class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      organization: {},
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    OrganizationService.get(id)
      .then((res) => {
        this.setState({ organization: res });
        // console.log(this.state.organization);
      });
  }

  delete(id) {
    // console.log(id);
    OrganizationService.delete(`/api/organization/${id}`)
      .then(() => {
        this.props.history.push('/');
      });
  }

  render() {
    const { match } = this.props;
    const { organization } = this.state;
    return <div className="container">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        {organization.name}
                    </h3>
                </div>
                <div className="panel-body">

                    <dl>
                        <dt>Name:</dt>
                        <dd>{organization.name}</dd>
                        <dt>Code:</dt>
                        <dd>{organization.code}</dd>

                    </dl>

                    <Link to={`${match.url}/edit`} className="btn btn-success">Edit</Link>
                    <button onClick={this.delete.bind(this, organization._id)} className="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>;
  }
}

export default Show;
