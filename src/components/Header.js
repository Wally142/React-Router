import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => (
    <header>
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand">Rodeo Inc</a>
                </div>
                <ul class="nav navbar-nav">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/team'>Team</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>
            </div>
        </nav>
    </header>
)

export default Header;