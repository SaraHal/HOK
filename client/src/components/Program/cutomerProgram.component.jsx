import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Table, Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import ProgramService from '../../services/program.service';

class ProgramList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            programs: []
        };
    }

    componentDidMount() {
        const { id: customerID } = this.props.match.params;       
        ProgramService.getByCustomer(customerID)
            .then(res => {
                this.setState({ programs: res });
                console.log(this.state.programs);
            });
    }

    render() {
        const { id: customerID } = this.props.match.params;
        const { programs } = this.state;
        return (

            <div class="container">
                <div class="panel panel-default">

                    <div class="panel-heading">
                        <h3 class="panel-title" style={{ display: 'inline' }}>
                            תוכניות
                         </h3>
                        <Link to={`/customer/${customerID}/program/create`} style={{ float: 'left' }} class="btn btn-outline-secondary" > <FontAwesomeIcon icon={faPlus} /> חדש</Link>
                    </div>
                    <div class="panel-body">


                        <Table borderless hover>
                            <thead>
                                <tr>
                                    <th>סכום</th>
                                    {/* <th>Code</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {programs.map(program =>
                                    <tr>
                                        <td><Link to={`/customer/${program.customer}`}>{program.sum}</Link></td>
                                        <td><Link to={`/customer/${program.customer}`}>{program.isActive}</Link></td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProgramList;
