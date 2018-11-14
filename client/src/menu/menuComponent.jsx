
import React from 'react';
import { connect } from 'react-redux'
import {NavLink , withRouter} from 'react-router-dom';

import menuService from './menuService';
import router from './routerComponent';

const MenuNode = props => props.items.map(i=>
    <div key={i.id}>
    {i.link &&<NavLink to={i.link}> {i.label} </NavLink>}
    {i.items&&<MenuNode {...i} />}
    </div>)
   
export default withRouter(connect(state => {
    const items = [...menuService];
    state.organizations.forEach((o, i) => {
        items[0].items.push({
            id: o._id,
            label: o.name,
            icon: 'fas fa-car',
            link: '/organizations/' + o._id,
        });
    });
    return { items };
})(props=><div>
    <MenuNode {...props}/>
    {router} </div>
));