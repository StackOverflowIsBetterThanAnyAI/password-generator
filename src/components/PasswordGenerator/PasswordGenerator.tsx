import React from 'react'
import PasswordGeneratorRow from './PasswordGeneratorRow'
import PasswordGeneratorButton from './PasswordGeneratorButton'

const PasswordGenerator = () => {
    return (
        <div className="container">
            <PasswordGeneratorButton buttonType="output" />
            <div className="input">
                <PasswordGeneratorRow
                    id={'length'}
                    text="Password Length"
                    type="number"
                />

                <PasswordGeneratorRow
                    id={'uppercase'}
                    text="Contains Uppercase Letters"
                    type="checkbox"
                />

                <PasswordGeneratorRow
                    id={'lowercase'}
                    text="Contains Lowercase Letters"
                    type="checkbox"
                />

                <PasswordGeneratorRow
                    id={'numbers'}
                    text="Contains Numbers"
                    type="checkbox"
                />

                <PasswordGeneratorRow
                    id={'symbols'}
                    text="Contains Symbols"
                    type="checkbox"
                />
            </div>

            <PasswordGeneratorButton buttonType="generate" />

            <div id="error" className="error"></div>
        </div>
    )
}

export default PasswordGenerator
