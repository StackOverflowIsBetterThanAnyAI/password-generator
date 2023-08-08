import React from 'react'
import Headroom from 'react-headroom'
import { Link } from 'react-router-dom'
import favicon from './../../images/favicon.png'

const StickyNavigation = () => {
    return (
        <Headroom>
            <div
                style={{
                    display: 'flex',
                    backgroundColor: '#a8d9ec',
                    fontSize: '3vw',
                    padding: '0.75vw 1.5vw',
                    justifyContent: 'space-between',
                }}
            >
                <div>
                    <span>
                        <Link to="/">
                            <img
                                src={favicon}
                                height="50vw"
                                style={{ paddingRight: '1vw' }}
                            ></img>
                            Password Generator
                        </Link>
                    </span>
                </div>
                <div>
                    <span style={{ marginRight: '1.5vw' }}>
                        <Link to="/pages/password-generator">
                            generate Password
                        </Link>
                    </span>
                    <span>
                        <Link to="/pages/password-storage">
                            stored Passwords
                        </Link>
                    </span>
                </div>
            </div>
        </Headroom>
    )
}

export default StickyNavigation
