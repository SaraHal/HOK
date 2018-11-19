import React, { Component } from 'react';

import actions from '../../redux/actions';
import dataLoader from '../data-loader-hoc.jsx';

import ProjectService from '../../services/project.service';
class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      project: this.props.current
    };
  }
  onChange = (e) => {
    const state = this.state.project;
    state[e.target.name] = e.target.value;
    this.setState({ project: state });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { organizationID, projectID } = this.props.match.params;
    const { name } = this.state.project;

    ProjectService.update(projectID, { name })
      .then((result) => {
        this.props.history.push(`/organizations/${organizationID}/projects/${projectID}`)
      });
  }

  render() {
    const { name } = this.state.project;
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">עריכת פרויקט</h3>
          </div>
          <div className="panel-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" className="form-control" name="name" value={name} onChange={this.onChange} placeholder="Name" />
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default dataLoader(Edit, actions.loadProject, 'projects');
