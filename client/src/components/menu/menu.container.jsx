
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import menu from './menu.component';

export default withRouter(connect(state => {
    const items = [
        {
            id: 'organizations',
            label: 'ארגונים',
            icon: 'fas fa-battery-half',
            link: '/organizations',
            items: [],
        },
    ];
    state.organizations.list.forEach((o, i) => {
        items[0].items.push({
            id: o._id,
            label: o.name,
            icon: 'fas fa-car',
            link: '/organizations/' + o._id,
            items: [
                {
                    id: o._id + '/customers',
                    label: 'לקוחות',
                    icon: 'fas fa-car',
                    link: '/organizations/' + o._id + '/customers',
                },
                {
                    id: o._id + '/projects',
                    label: 'פרויקטים',
                    icon: 'fas fa-car',
                    link: '/organizations/' + o._id + '/projects',
                }
            ]
        });
    });
    return { items };
})(menu));