import React, { Component } from 'react';

import actions from '../../redux/actions';
import dataLoader from '../data-loader-hoc.jsx';

import CustomerService from '../../services/customer.service'

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      customer: props.current
    };
  }

  onChange = (e) => {
    const state = this.state.customer;
    state[e.target.name] = e.target.value;
    this.setState({ customer: state });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { organizationID,customerID } = this.props.match.params;
    const { id, firstName, lastName } = this.state.customer;

    CustomerService.update(customerID, { id, firstName, lastName }).then((result) => {
      this.props.history.push(`/organizations/${organizationID}/customers/${customerID}`)
    });
  }

  render() {
    const { id, firstName, lastName } = this.state.customer;
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              EDIT CUSTOMER
            </h3>
          </div>
          <div className="panel-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="id">ת.ז.</label>
                <input type="text" className="form-control" name="id" value={id} onChange={this.onChange} placeholder="ID" />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">משפחה</label>
                <input type="text" className="form-control" name="lastName" value={lastName} onChange={this.onChange} placeholder="Last Name" />
              </div>
              <div className="form-group">
                <label htmlFor="firstName">פרטי</label>
                <input type="text" className="form-control" name="firstName" value={firstName} onChange={this.onChange} placeholder="First Name" />
              </div>
              <button type="submit" className="btn btn-default">עדכן</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default dataLoader(Edit, actions.loadCustomer, 'customers');
