import React, { Component } from 'react';
import OrganizationService from '../../services/organization.service';

class Create extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      code: ''

    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { name, code } = this.state;

    OrganizationService.create({ name, code })
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    const { name, code } = this.state;
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              ארגון חדש
            </h3>
          </div>
          <div className="panel-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="name">שם</label>
                <input type="text" className="form-control" name="name" value={name} onChange={this.onChange} placeholder="שם" />
              </div>
              <div className="form-group">
                <label htmlFor="code">קוד</label>
                <input type="text" className="form-control" name="code" value={code} onChange={this.onChange} placeholder="קוד" />
              </div>
              <button type="submit" className="btn btn-default">הוסף</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
