import React,{ Component } from 'react';
import ldsh from 'lodash'
import OrganizationService from '../../services/organization.service';

class Create extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      code: '',
      communication:{address:{}},
      paymentAgreement:{minPrice :1,commissionPerUnit :1,dayOfCharge :22,paymentMethod :{}}
    };
  }

  onChange(e) {
    const {state} = this;
    ldsh.set(state, e.target.name, e.target.value);
    this.setState(state);
  }

  onSubmit(e) {
    e.preventDefault();

    const { name, code, communication, paymentAgreement} = this.state;

    OrganizationService.create({ name, code, communication, paymentAgreement})
      .then(() => {
        this.props.history.push('/');
      });
  }

  render() {
    const { name, code, communication} = this.state;
    return <div className="container">
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
            <div className="form-group">
              <label htmlFor="address.city">קוד עיר</label>
              <input type="text" className="form-control" name="communication.address.city" value={communication.address.city} onChange={this.onChange} placeholder="קוד עיר" />
              <label htmlFor="address.street">רחוב</label>
              <input type="text" className="form-control" name="communication.address.street" value={communication.address.street} onChange={this.onChange} placeholder="רחוב" />
              <label htmlFor="communication.phone">טלפון</label>
              <input type="phone" className="form-control" name="communication.phone" value={communication.phone} onChange={this.onChange} placeholder="טלפון" />
              <label htmlFor="communication.email">מייל</label>
              <input type="email" className="form-control" name="communication.email" value={communication.email} onChange={this.onChange} placeholder="מייל" />
           </div>
            <button type="submit" className="btn btn-default">הוסף</button>
          </form>
        </div>
      </div>
    </div>;
  }
}

export default Create;
