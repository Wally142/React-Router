import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => (
    <header>
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand">League Of Donks</a>
                </div>
                <ul className="nav navbar-nav">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/rules'>Rules</Link></li>
                    <li><Link to='/rankings'>Rankings</Link></li>
                    <li><Link to='/results'>Results</Link></li>
                    <li><Link to='/bark'>Barking</Link></li>
                </ul>
            </div>
        </nav>
    </header>
)

export default Header;