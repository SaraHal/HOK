import React, { Component } from 'react';

import CustomerService from '../services/customer.service';
import EditCustomer from '../components/Customer/Edit';
import CustomerProgram from '../components/Program/cutomerProgram.component';
import CreateProgram from '../components/Program/createProgram.component';
import { Link, BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faHandshake } from '@fortawesome/free-solid-svg-icons';

class Show extends Component {

    constructor(props) {
        super(props);
        this.state = {
            customer: {}
        };
    }

    componentDidMount() {

        const { id } = this.props.match.params;
        console.log(id);
        CustomerService.get(id)
            .then(res => {
                this.setState({ customer: res });
                console.log(this.state.customer);
            });
    }


    render() {
        const { id, firstName, lastName } = this.state.customer;
        const { match } = this.props;
        console.log(match.url);
        return (
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title" style={{ display: 'inline' }}>
                            {firstName} {lastName}
                        </h3>

                        <Link to={`${match.url}/edit`} >
                            <FontAwesomeIcon icon={faPencilAlt} /></Link>
                        <Link to={`${match.url}/program`} ><FontAwesomeIcon icon={faHandshake} /></Link>
                    </div>
                </div>
                <hr />
                <Switch>
                    <Route path={`${match.path}/edit`} component={EditCustomer} />
                    <Route path={`${match.path}/program/create`} component={CreateProgram} />
                    <Route path={`${match.path}/program`} component={CustomerProgram} />
                    <Route path={`${match.path}`} render={() => <Redirect to={`${match.url}/program`} />} />

                </Switch>
            </div>
        );
    }
}

export default Show;
