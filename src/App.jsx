import React from 'react'
import {
    HashRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import PrivateRouter from "./components/PrivateRouter.jsx";
import AuthorizationPage from './pages/AuthorizationPage/AuthorizationPage.jsx'
import EditCreatePage from "./pages/EditAndCreateCar/EditCreatePage.jsx";

export default function() {
    return(
        <Router>
            <Switch>
              <Route exact path="/" component={AuthorizationPage} />
              <PrivateRouter path="/admin/editpage" component={() => (<EditCreatePage />)} />
            </Switch>
        </Router>
    )
}
