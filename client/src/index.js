import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import CrumbRoute from './crumb-route.jsx';


ReactDOM.render((
    <Router>
        <CrumbRoute hidden path="/" component={App}/>
    </Router>
), document.getElementById('app'));