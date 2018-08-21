import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import OrganizationService from '../../services/organization.service';
class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      organization: {}
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    OrganizationService.get(id)
      .then(res => {
        this.setState({ organization: res });
        console.log(this.state.organization);
      });
  }

  onChange = (e) => {
    const state = this.state.organization;
    state[e.target.name] = e.target.value;
    this.setState({ organization: state });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { id } = this.props.match.params;
    const { name, code } = this.state.organization;

    OrganizationService.update(id, { name, code })
      .then((result) => {
        this.props.history.push(`/organization/${id}`)
      });
  }

  render() {
    const { name, code } = this.state.organization;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              EDIT ORGANIZATION
            </h3>
          </div>
          <div class="panel-body">
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="name">שם</label>
                <input type="text" class="form-control" name="name" value={name} onChange={this.onChange} placeholder="Name" />
              </div>
              <div class="form-group">
                <label for="title">קוד</label>
                <input type="text" class="form-control" name="code" value={code} onChange={this.onChange} placeholder="Code" />
              </div>

              <button type="submit" class="btn btn-default">עדכן</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;
