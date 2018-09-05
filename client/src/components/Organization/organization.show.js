import React, { Component } from 'react';
import {Switch, Link, CrumbRoute} from 'react-router-dom';

import OrganizationService from '../../services/organization.service';

import EditOrganization from '../Organization/organization.edit';
import ProjectsList from '../Project/project.list';
import CustomerList from '../Customer/customer.list';


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
        const { match } = this.props;
        const { organization } = this.state;
        return (
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            {organization.name}
                        </h3>
                    </div>
                    <div className="panel-body">

                        <dl>
                            <dt>Name:</dt>
                            <dd>{organization.name}</dd>
                            <dt>Code:</dt>
                            <dd>{organization.code}</dd>

                        </dl>

                        <Link to={`${match.url}/edit`} className="btn btn-success">Edit</Link>
                        <button onClick={this.delete.bind(this, organization._id)} className="btn btn-danger">Delete</button>
                    </div>
                </div>
                <Switch>
                <CrumbRoute title="עריכה" path={`${match.path}/edit`} component={EditOrganization} />
                <CrumbRoute title="פרויקטים" path={`${match.path}/projects`} component={ProjectsList} />
                <CrumbRoute title="לקוחות" path={`${match.path}/customers`} component={CustomerList} />
                </Switch>
            </div>
        );
    }
}

export default Show;
