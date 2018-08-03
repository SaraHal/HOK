import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import CustomerService from '../../services/customer.service'

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      customer: {}
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    CustomerService.get(id)
      .then(res => {
        this.setState({ customer: res });

      });
  }

  onChange = (e) => {
    const state = this.state.organization;
    state[e.target.name] = e.target.value;
    this.setState({ customer: state });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { id: _id } = this.props.match.params;
    const { id, firstName, lastName } = this.state.customer;

    axios.put(`/api/customer/${_id}`, { id, firstName, lastName })
      .then((result) => {
        this.props.history.push(`/customer/${_id}`)
      });
  }

  render() {
    const { id, firstName, lastName } = this.state.customer;

    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              EDIT CUSTOMER
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to={`/organization/${this.state.customer._id}`}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Customer List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="id">id:</label>
                <input type="text" class="form-control" name="id" value={id} onChange={this.onChange} placeholder="ID" />
              </div>
              <div class="form-group">
                <label for="lastName">Last Name:</label>
                <input type="text" class="form-control" name="lastName" value={lastName} onChange={this.onChange} placeholder="Last Name" />
              </div>
              <div class="form-group">
                <label for="firstName">First Name:</label>
                <input type="text" class="form-control" name="firstName" value={firstName} onChange={this.onChange} placeholder="First Name" />
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;
