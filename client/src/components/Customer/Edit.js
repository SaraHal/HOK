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
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              EDIT CUSTOMER
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to={`/organization/${this.state.customer._id}`}><span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Customer List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label for="id">ת.ז.</label>
                <input type="text" className="form-control" name="id" value={id} onChange={this.onChange} placeholder="ID" />
              </div>
              <div className="form-group">
                <label for="lastName">משפחה</label>
                <input type="text" className="form-control" name="lastName" value={lastName} onChange={this.onChange} placeholder="Last Name" />
              </div>
              <div className="form-group">
                <label for="firstName">פרטי</label>
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

export default Edit;
