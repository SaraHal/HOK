import React, { Component } from 'react';
import { Link , Switch} from 'react-router-dom';
import CrumbRoute from '../../crumb-route';

import OrganizationService from '../../services/organization.service';

import EditOrganization from './Edit';
import CustomerList from '../Customer/List';
import ProjectList from '../Project/List';

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

                        <Link to={`edit/${organization._id}`} className="btn btn-success">Edit</Link>
                        <button onClick={this.delete.bind(this, organization._id)} className="btn btn-danger">Delete</button>
                    </div>
                </div>
                <Switch>
                    <CrumbRoute title="עריכה" path={`${match.path}/edit`} component={EditOrganization} />
                    <CrumbRoute title="לקוחות" path={`${match.path}/customer`} component={CustomerList} />
                    <CrumbRoute title="פרויקטים" path={`${match.path}/project`} component={ProjectList} />
                </Switch>
            </div>
        );
    }
}

export default Show;
