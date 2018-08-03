import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import CustomerService from '../../services/customer.service'
class Show extends Component {

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
                console.log(this.state.customer);
            });
    }
   

    render() {
        const { id, firstName, lastName } = this.state.customer;

        return (
            <div class="container">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">
                            {firstName} {lastName}
                        </h3>
                    </div>
                    <div class="panel-body">
                        <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Customer List</Link></h4>
                        <dl>
                            <dt>ID:</dt>
                            <dd>{id}</dd>
                            <dt>First Name:</dt>
                            <dd>{firstName}</dd>
                            <dt>Last Name:</dt>
                            <dd>{lastName}</dd>
                        </dl>



                        <Link to={`/organization/edit/${this.state.customer._id}`} class="btn btn-success">Edit</Link>&nbsp;
            
                    </div>
                </div>
            </div>
        );
    }
}

export default Show;
