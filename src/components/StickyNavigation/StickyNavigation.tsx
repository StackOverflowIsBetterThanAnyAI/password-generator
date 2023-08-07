import React from 'react'
import Headroom from 'react-headroom'
import { Link } from 'react-router-dom'

const StickyNavigation = () => {
    return (
        <Headroom>
            <div
                style={{
                    display: 'flex',
                    backgroundColor: '#a8d9ec',
                    fontSize: '36px',
                    padding: '10px 20px',
                    marginBottom: '20px',
                    columnGap: '20px',
                    justifyContent: 'space-between',
                }}
            >
                <div>
                    <span>
                        <Link to="/">Password Generator</Link>
                    </span>
                </div>
                <div>
                    <span style={{ marginRight: '20px' }}>
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
