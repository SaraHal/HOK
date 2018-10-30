import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import { setOrganizations } from './actions'
const store = createStore(rootReducer);

organizationsService.getList().then(organizations => {
    store.dispatch(setOrganizations(organizations));
});

ReactDOM.render((
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
), document.getElementById('app'));