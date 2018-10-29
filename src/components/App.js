import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import routes from '../routes';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div id="main-wrapper">
                    <header className="header">Cinemax Theater</header>
                    <nav className="navbar">
                        {routes.map(route => (
                            <NavLink to={route.path} key={route.text} exact>
                                {route.text}
                            </NavLink>
                        ))}
                    </nav>
                    <main className="main">
                        {routes.map(route => (
                            <Route
                                key={route.text}
                                path={route.path}
                                component={route.component}
                                exact
                            />
                        ))}
                    </main>
                </div>
            </Router>
        );
    }
}
