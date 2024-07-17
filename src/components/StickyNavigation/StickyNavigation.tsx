import React from 'react'
import favicon from './../../images/favicon.png'
import './StickyNavigation.css'

const StickyNavigation = () => {
    return (
        <nav className="stickyNavigation">
            <a className="stickyNavigationContent" href="/">
                <img src={favicon} alt="Back to the Start" />
                <h1>Password Generator</h1>
            </a>
        </nav>
    )
}

export default StickyNavigation
