import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import EditOrganization from '../components/Organization/Edit';
import OrganizationService from '../services/organization.service';
import CustomerList from '../components/Customer/List';
import CreateCustomer from '../components/Customer/Create';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faUsers } from '@fortawesome/free-solid-svg-icons';


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


    render() {
        const { match } = this.props;
        const { organization } = this.state;
        return (
            <div class="container">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title" style={{ display: 'inline' }}>
                            {organization.name}
                        </h3>
                        <Link to={`/organization/${organization._id}/edit`} >
                            <FontAwesomeIcon icon={faPencilAlt} /></Link>
                        <Link to={`${match.url}/customer`} ><FontAwesomeIcon icon={faUsers} /></Link>
                    </div>


                    <hr />
                </div>
                <Switch>
                    <Route path={`${match.path}/edit`} component={EditOrganization} />
                    <Route path={`${match.path}/customer/create`} component={CreateCustomer} />
                    <Route path={`${match.path}/customer`} component={CustomerList} />
                    <Route path={`${match.path}`} render={() => <Redirect to={`${match.url}/customer`} />} />

                </Switch>
            </div>
        );
    }
}

export default Show;
