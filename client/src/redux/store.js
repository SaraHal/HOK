import { createStore } from 'redux';

import rootReducer from './reducers';
import { setOrganizations } from './actions';

import organizationsService from '../services/organization.service';

const store = createStore(rootReducer);

organizationsService.getList().then(organizations => {
    store.dispatch(setOrganizations(organizations));
});

export default store;