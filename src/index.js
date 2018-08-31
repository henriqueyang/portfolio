import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './styles/css/main.css';

import NavBar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Knowledge from './components/Knowledge';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

ReactDOM.render(
    <Router>
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/sobre" component={About} />
                <Route path="/conhecimento" component={Knowledge} />
                <Route path="/projetos" component={Project} />
                <Route path="/contatos" component={Contact} />
            </Switch>
            <Footer />
        </div>
    </Router>, document.getElementById('root'));
