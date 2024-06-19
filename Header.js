import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="logo">Logo</div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/game">Game</Link></li>
                    <li><Link to="/simulation">Simulation</Link></li>
                    <li><Link to="/resources">Resources</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
