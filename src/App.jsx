import React from 'react'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;

export default function() {
    return(
        <Router>
            <div>
            <Link to="/">Home</Link>
            <Link to='/about'>About</Link>
            <Link to="/contact">Contact</Link>
            
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route
                path="/contact"
                render={() => <h1>Contact Us</h1>} />
                <Route render={() => <h1>Page not found</h1>} />
            </Switch>
            </div>
        </Router>
    )
}