import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, NavLink, Navbar } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

class ResponsiveDrawer extends React.Component {

    render() {
        return (
            <Navbar color="light" light expand="md">
                <Nav >
                    <NavItem>
                        <Link to={`/`} class="nav-link"> <FontAwesomeIcon icon={faHome} ></FontAwesomeIcon></Link>
                    </NavItem>

                </Nav>
            </Navbar >

        );
    }
}


export default ResponsiveDrawer;