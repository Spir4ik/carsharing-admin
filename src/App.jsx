import React from 'react'
import {
    HashRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import PrivateRouter from "./components/PrivateRouter.jsx";
import AuthorizationPage from './pages/AuthorizationPage/AuthorizationPage.jsx'
import EditCreatePage from "./pages/EditCreatePage.jsx";
import TableCars from "./pages/TableCars.jsx";
import TableOrders from "./pages/TableOrders.jsx";

export default function() {
    return(
        <Router>
            <Switch>
              <Route exact path="/" component={AuthorizationPage} />
              <PrivateRouter path="/admin/editpage" component={() => (<EditCreatePage />)} />
              <PrivateRouter path="/admin/tablecars" component={() => (<TableCars />)} />
              <PrivateRouter path="/admin/tableorders" component={() => (<TableOrders />)} />
            </Switch>
        </Router>
    )
}
