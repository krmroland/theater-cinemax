import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { Provider } from 'react-redux';
import routes from '../routes';
import store from '../store';
import Notifications from './Notifications';
export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router basename={process.env.PUBLIC_URL}>
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
                            <Notifications />
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
            </Provider>
        );
    }
}
