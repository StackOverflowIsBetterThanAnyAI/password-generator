import React from 'react'
import Headroom from 'react-headroom'
import { Link } from 'react-router-dom'
import favicon from './../../images/favicon.png'

const StickyNavigation = () => {
    return (
        <Headroom>
            <div
                style={{
                    backgroundColor: '#a8d9ec',
                    fontSize: '3vw',
                    padding: '1.5vw',
                    position: 'relative',
                }}
            >
                <span style={{ paddingRight: '10vw', position: 'relative' }}>
                    <Link to="/">
                        <img
                            id="stickynavigation-favicon"
                            src={favicon}
                            width="10%"
                            style={{
                                position: 'absolute',
                                bottom: 0,
                            }}
                        ></img>
                        <span style={{ paddingLeft: '6vw' }}>
                            Password Generator
                        </span>
                    </Link>
                </span>
                <span style={{ paddingRight: '1.5vw' }}>
                    <Link to="/pages/password-generator">Generator</Link>
                </span>
                <span>
                    <Link to="/pages/password-storage">Storage</Link>
                </span>
            </div>
        </Headroom>
    )
}

export default StickyNavigation
