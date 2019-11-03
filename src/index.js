import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import './styles/css/main.css';

import NavBar from './components/Navbar';
import Footer from './components/Footer';

import Home from './screens/Home';
import About from './screens/About';
import Knowledge from './screens/Knowledge';
import Contact from './screens/Contact';

ReactDOM.render(
    <Router>
        <>
            <NavBar />
            <Switch>
                <Route exact path="/portfolio/" component={Home} />
                <Route path="/sobre" component={About} />
                <Route path="/conhecimento" component={Knowledge} />
                <Route path="/contatos" component={Contact} />
                <Redirect from="**" to="/portfolio/" />
            </Switch>
            <Footer />
        </>
    </Router>, document.getElementById('root'));
