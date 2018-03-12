import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import App from "./components/app.jsx";

ReactDOM.render(
    <Router>
        <Route exact path="/" component={App}/>
    </Router>,
    document.getElementById('mount-point')
);