import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './menu.style.css';

const MenuNode = props => props.items.map(i =>
    <div className="menu-node" key={i.id}>
        {i.link && <NavLink to={i.link}> {i.label} </NavLink>}
        {i.items && <MenuNode{...i} />}
    </div>);

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: true,
        };
    }
    render() {
        return (
            <div id="sidebar-wrapper">
                <button>
                    <FontAwesomeIcon
                        icon={faBars}
                        onClick={() => this.setState({ isVisible: !this.state.isVisible })} />
                </button>
                <div style={{ visibility: this.state.isVisible ? 'visible' : 'hidden' }}>
                    <MenuNode {...this.props} />
                </div>
            </div>
        );
    }
}