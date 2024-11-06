import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="container">
            <div className="container-navbar">
                <nav>
                    <div className="toggle-btn" onClick={toggleNavbar}>
                        &#9776;
                    </div>
                    <ul className={`navbar-list ${isOpen ? 'show' : ''}`}>
                        <li><a href="/">Home</a></li>
                        <li><a href="Genres.js">Categories/Genres</a></li>
                        <li><a href="#">New Releases</a></li>
                        <li><a href="#">Popular</a></li>
                        <li><a href="#">Watchlist</a></li>
                        <li><a href="#">Account/Profile</a></li>
                        <li><a href="#">Search</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Blog/News</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
 