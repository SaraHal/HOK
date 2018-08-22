import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, NavLink, Navbar } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

class StaticNavBar extends React.Component {

    render() {
        return (
            <Navbar color="light" light expand="md">
                <Nav >
                    <NavItem>
                        <Link to={`/`} className="nav-link"> <FontAwesomeIcon icon={faHome} ></FontAwesomeIcon></Link>
                    </NavItem>

                </Nav>
            </Navbar >

        );
    }
}

const BreadCrumbs= ({title, match}) =>
<div className="container">
    <h3 className="panel-title" style={{ display: 'inline' }}> {title}</h3> {match}
</div>
;
  
export {StaticNavBar, BreadCrumbs};