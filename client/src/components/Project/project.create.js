import React, { Component } from 'react';
import ProjectService from '../../services/project.service'

class Create extends Component {

  constructor() {
    super();
    this.state = {
      name: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const {name } = this.state;
    const {organizationID : organization} = this.props.match.params;
    ProjectService.create({ name, organization })
      .then((result) => {
        this.props.history.push(`/organizations/${organization}/projects`)
      });
  }

  render() {
    const { name } = this.state;
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">פרויקט חדש</h3>
          </div>
          <div className="panel-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="name">שם</label>
                <input type="text" className="form-control" name="name" value={name} onChange={this.onChange} placeholder="שם" />
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
