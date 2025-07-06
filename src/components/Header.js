import React from 'react';
import logo from '../assets/logo192.png'; // Adjust the path as needed

function Header() {
    return (
        <header>
            <img
                src={logo}
                alt="Little Lemon logo"
                style={{ height: '60px' }}
            />
        </header>
    );
}

export default Header;
