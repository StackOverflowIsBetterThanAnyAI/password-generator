import React from 'react'
import PasswordGeneratorRow from './PasswordGeneratorRow'

const PasswordGenerator = () => {
    const returnPassword = () => {
        console.log('Halo')
    }
    const copyToClipBoard = () => {
        console.log('Halooooo')
    }

    return (
        <div className="container">
            <div className="output-container">
                <div className="output" id="output">
                    Password Generator
                </div>
                <div className="copy-button">
                    <input
                        id="copy"
                        type="button"
                        value="Copy To Clipboard"
                        onClick={() => copyToClipBoard}
                    />
                </div>
            </div>
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
            <div className="generate">
                <input
                    id="button"
                    type="button"
                    value="Generate Password"
                    onClick={returnPassword}
                />
            </div>
            <div id="error" className="error"></div>
        </div>
    )
}

export default PasswordGenerator
