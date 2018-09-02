import React from 'react';
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (

        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-light">

                <div className="container">

                    <NavLink to="/portfolio/" id="nav-title" className="navbar-brand mb-0 h1">MEU PORTFÓLIO</NavLink>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" id="nav-button" data-target="#navbarSite">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSite">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink to="/sobre" id="nav-item" className="nav-link">Sobre</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/conhecimento" id="nav-item" className="nav-link">Conhecimento</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/projetos" id="nav-item" className="nav-link">Projetos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contatos" id="nav-item" className="nav-link">Contatos</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;