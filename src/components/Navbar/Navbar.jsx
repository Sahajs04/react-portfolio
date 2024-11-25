import './Navbar.css';
import React from 'react'

export const Navbar = () => {
    return <nav className="NavigationBar">
        <a href="/" className="HomeButton">Home</a>

        <div>
        <ul className="ElementsList">
            <li>
                <a href="#about">About</a>
                </li>
                <li>
                <a href="#projects">Projects</a>
                </li>
                <li>
                <a href="#projects">Contact</a>
                </li>
        </ul>

        </div>

    </nav>
}
