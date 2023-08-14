import React from 'react'
import PasswordGeneratorRow from './PasswordGeneratorRow'
import PasswordGeneratorButton from './PasswordGeneratorButton'

const PasswordGenerator = () => {
    return (
        <div className="container">
            <PasswordGeneratorButton>
                <div className="input">
                    <PasswordGeneratorRow />
                </div>
            </PasswordGeneratorButton>
        </div>
    )
}

export default PasswordGenerator
