import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import OrganizationService from '../../services/organization.service';


class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      organization: {},
    };
  }

  componentDidMount() {
    const { organizationID } = this.props.match.params;
    OrganizationService.get(organizationID)
      .then((res) => {
        this.setState({ organization: res });
        // console.log(this.state.organization);
      });
  }

  componentWillReceiveProps(nextProps) {
    const { organizationID } = nextProps.match.params;
    if (this.props.match.params.organizationID !== organizationID)
      OrganizationService.get(organizationID)
        .then((res) => {
          this.setState({ organization: res });
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
        </div>
      </div>
    </div>;
  }
}

export default Show;
