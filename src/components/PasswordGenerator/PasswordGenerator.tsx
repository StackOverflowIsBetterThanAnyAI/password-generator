import React from 'react'
import PasswordGeneratorRow from './PasswordGeneratorRow'
import PasswordGeneratorButton from './PasswordGeneratorButton'

const PasswordGenerator = () => {
    return (
        <div className="container">
            <PasswordGeneratorButton buttonType="output" />
            <div className="input">
                <PasswordGeneratorRow text="Password Length" type="number" />

                <PasswordGeneratorRow
                    text="Contains Uppercase Letters"
                    type="checkbox"
                />

                <PasswordGeneratorRow
                    text="Contains Lowercase Letters"
                    type="checkbox"
                />

                <PasswordGeneratorRow text="Contains Numbers" type="checkbox" />

                <PasswordGeneratorRow text="Contains Symbols" type="checkbox" />
            </div>

            <PasswordGeneratorButton buttonType="generate" />

            <div id="error" className="error"></div>
        </div>
    )
}

export default PasswordGenerator
