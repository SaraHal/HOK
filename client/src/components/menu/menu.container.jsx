
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom';
import menuService from './menu.service';
import menu from './menu.component';

export default withRouter(connect(state => {
    const items = [...menuService];
    state.organizations.forEach((o, i) => {
        items[0].items.push({
            id: o._id,
            label: o.name,
            icon: 'fas fa-car',
            link: '/organizations/' + o._id,
            items:[
                {
                    id: o._id+'/customers',
                    label: 'לקוחות',
                    icon: 'fas fa-car',
                    link: '/organizations/' + o._id+'/customers',                
                }
            ]
        });
    });
    return { items };
})(menu));