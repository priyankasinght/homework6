import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <div>
            <header className="navbar-header">
                <a className="logo-link" href="/">
                    <h3 className="logo-text">logo</h3>
                </a>
                <nav className="navbar-nav">
                    <ul className="navbar-links">
                        <li>
                            <a className="navbar-link" href='/'>Home</a>
                        </li>
                        <li>
                            <a className="navbar-link" href="/about">About</a>
                        </li>
                        <li>
                            <a className="navbar-link" href="/contact">Contact</a>
                        </li>
                    </ul>
                </nav>
                <div className="social-icons">
                    <a href="/fb">
                        <i className="fa-brands fa-facebook-f fa-2x"></i>
                    </a>
                    <a href="/tw">
                        <i className="fa-brands fa-twitter fa-2x"></i>
                    </a>
                    <a href="/ig">
                        <i className="fa-brands fa-instagram fa-2x"></i>
                    </a>
                </div>
            </header>
            <div className="navbar-content">
            </div>
        </div>
    );
}

export default Navbar;
