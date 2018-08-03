import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import OrganizationService from '../../services/organization.service';
class Show extends Component {

    constructor(props) {
        super(props);
        this.state = {
            organization: {}
        };
    }

    componentDidMount() {
        const { id } = this.props.match.params
        OrganizationService.get(id)
            .then(res => {
                this.setState({ organization: res });
                console.log(this.state.organization);
            });
    }

    delete(id) {
        console.log(id);
        axios.delete('/api/organization/' + id)
            .then((result) => {
                this.props.history.push("/")
            });
    }

    render() {
        const { organization } = this.state
        return (
            <div class="container">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">
                            {organization.name}
                        </h3>
                    </div>
                    <div class="panel-body">

                        <dl>
                            <dt>Name:</dt>
                            <dd>{organization.name}</dd>
                            <dt>Code:</dt>
                            <dd>{organization.code}</dd>

                        </dl>

                        <Link to={`edit/${organization._id}`} class="btn btn-success">Edit</Link>
                        <button onClick={this.delete.bind(this, organization._id)} class="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Show;
