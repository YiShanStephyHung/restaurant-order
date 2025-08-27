import React from 'react';
import logo from '../assets/logo192.png'; // Adjust the path as needed

function Header() {
    return (
        <header className="header">
            <img
                src={logo}
                alt="Little Lemon logo"
                style={{ height: '60px' }}
            />
            <h1>Little Lemon</h1>
        </header>
    );
}

export default Header;
