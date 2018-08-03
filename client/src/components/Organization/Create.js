import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import OrganizationService from '../../services/organization.service';

import { Link } from 'react-router-dom';

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
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              ארגון חדש
            </h3>
          </div>
          <div class="panel-body">
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="name">שם</label>
                <input type="text" class="form-control" name="name" value={name} onChange={this.onChange} placeholder="שם" />
              </div>
              <div class="form-group">
                <label for="code">קוד</label>
                <input type="text" class="form-control" name="code" value={code} onChange={this.onChange} placeholder="קוד" />
              </div>
              <button type="submit" class="btn btn-default">הוסף</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
