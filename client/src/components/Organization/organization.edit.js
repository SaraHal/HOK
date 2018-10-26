import React, { Component } from 'react';

import OrganizationService from '../../services/organization.service';

class Edit extends Component {
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

  onChange(e) {
    const state = this.state.organization;
    state[e.target.name] = e.target.value;
    this.setState({ organization: state });
  }

  onSubmit(e) {
    e.preventDefault();
    const { id } = this.props.match.params;
    const { name, code } = this.state.organization;

    OrganizationService.update(id, { name, code })
      .then(() => {
        this.props.history.push(`/organizations/${id}`);
      });
  }

  render() {
    const { name, code } = this.state.organization;
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              EDIT ORGANIZATION
            </h3>
          </div>
          <div className="panel-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="name">שם</label>
                <input type="text" className="form-control" name="name" value={name} onChange={this.onChange} placeholder="Name" />
              </div>
              <div className="form-group">
                <label htmlFor="title">קוד</label>
                <input type="text" className="form-control" name="code" value={code} onChange={this.onChange} placeholder="Code" />
              </div>

              <button type="submit" className="btn btn-default">עדכן</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;
