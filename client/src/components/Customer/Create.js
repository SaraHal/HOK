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
        this.props.history.push(`/organizations/${organization}/customer`)
      });
  }

  render() {
    const { id, firstName, lastName } = this.state;
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              לקוח חדש
            </h3>
          </div>
          <div className="panel-body">

            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="id">ת.ז.</label>
                <input type="text" className="form-control" name="id" value={id} onChange={this.onChange} placeholder="ת.ז." />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">משפחה</label>
                <input type="text" className="form-control" name="lastName" value={lastName} onChange={this.onChange} placeholder="משפחה" />
              </div>
              <div className="form-group">
                <label htmlFor="firstName">פרטי</label>
                <input type="text" className="form-control" name="firstName" value={firstName} onChange={this.onChange} placeholder="פרטי" />
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
