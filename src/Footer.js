import React from 'react';

function Footer() {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} Little Lemon. All rights reserved.</p>
            <p>
                <a href="/contact">Contact Us</a> |
                <a href="/privacy"> Privacy Policy</a>
            </p>
        </footer>
    );
}

export default Footer;
