import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
import ProgramService from '../../services/program.service'

class Create extends Component {

  constructor() {
    super();
    this.state = {
      sum: '',
      startDate: '',
      numOfPayments: ''

    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { sum, startDate, numOfPayments } = this.state;
    const { id: customer } = this.props.match.params;
    ProgramService.create({ customer,sum, startDate, numOfPayments  })
      .then((result) => {
        this.props.history.push(`/customer/${customer}/program`)
      });
  }

  render() {
    const { sum, startDate, numOfPayments } = this.state;
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              ADD Program
            </h3>
          </div>
          <div className="panel-body">

            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="sum">Sum:</label>
                <input type="text" className="form-control" name="sum" value={sum} onChange={this.onChange} placeholder="Sum" />
              </div>
              <div className="form-group">
                <label htmlFor="startDate">Start Date:</label>
                <input type="text" className="form-control" name="startDate" value={startDate} onChange={this.onChange} placeholder="Start Date" />
              </div>
              <div className="form-group">
                <label htmlFor="numOfPayments">Num Of Payments:</label>
                <input type="text" className="form-control" name="numOfPayments" value={numOfPayments} onChange={this.onChange} placeholder="Num Of Payments" />
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
