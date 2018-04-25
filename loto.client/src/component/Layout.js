import React, {Component,Fragment} from 'react';
import {NavLink} from 'react-router-dom';

class Layout extends Component {
    render = () => {
        return (
            <Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <NavLink className="navbar-brand" to="/">Emre Şimşek</NavLink>
                    <button
                        id="navbar-btn"
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/sayisal">Sayisal Loto</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/sanstopu">Şans Topu</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/onnumara">On Numara</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/superloto">Süper Loto</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="container">
                    {this.props.children}
                </div>
            </Fragment>
        )
    }
}

export default Layout;