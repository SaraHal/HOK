import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
import CustomerService from '../../services/customer.service'

class Create extends Component {

  constructor() {
    super();
    this.state = {
      id: '',
      firstName: '',
      lastName: ''

    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { id, firstName, lastName } = this.state;
    const { id: organization } = this.props.match.params;
    CustomerService.create({ id, firstName, lastName, organization })
      .then((result) => {
        this.props.history.push(`/organization/${organization}/customer`)
      });
  }

  render() {
    const { id, firstName, lastName } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              לקוח חדש
            </h3>
          </div>
          <div class="panel-body">

            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="id">ת.ז.</label>
                <input type="text" class="form-control" name="id" value={id} onChange={this.onChange} placeholder="ת.ז." />
              </div>
              <div class="form-group">
                <label for="lastName">משפחה</label>
                <input type="text" class="form-control" name="lastName" value={lastName} onChange={this.onChange} placeholder="משפחה" />
              </div>
              <div class="form-group">
                <label for="firstName">פרטי</label>
                <input type="text" class="form-control" name="firstName" value={firstName} onChange={this.onChange} placeholder="פרטי" />
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
