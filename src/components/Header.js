import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => (
    <header>
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand">Rodeo Consultants</a>
                </div>
                <ul className="nav navbar-nav">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/world'>World News</Link></li>
                    <li><Link to='/sports'>Sports</Link></li>
                    <li><Link to='/finance'>Finance</Link></li>
                    <li><Link to='/tech'>Tech</Link></li>
                </ul>
            </div>
        </nav>
    </header>
)

export default Header;