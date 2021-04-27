import React from 'react'
import {
    HashRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import AuthorizationPage from './pages/AuthorizationPage/AuthorizationPage.jsx'

export default function() {
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={AuthorizationPage} />
            </Switch>
        </Router>
    )
}