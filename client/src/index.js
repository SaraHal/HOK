import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import CrumbRoute from './crumb-route.jsx';


ReactDOM.render((
    <Router>
        <CrumbRoute path="/" component={ App } />
    </Router>
), document.getElementById('app'));