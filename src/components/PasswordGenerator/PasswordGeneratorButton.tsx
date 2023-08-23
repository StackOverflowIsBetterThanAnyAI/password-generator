import React, { useState } from 'react'

const PasswordGeneratorButton = ({ children }: any) => {
    const [output, setOutput] = useState('Password')

    const generatePassword = () => {
        setOutput('password has been generated')
    }

    return (
        <>
            <div className="output-container">
                <div className="output" id="output">
                    {output}
                </div>
                <div className="copy-button">
                    <input
                        id="copy"
                        type="button"
                        value="Copy To Clipboard"
                        onClick={() => navigator.clipboard.writeText(output)}
                    />
                </div>
            </div>
            {children}
            <div className="generate-button">
                <input
                    id="generate"
                    type="button"
                    value="Generate Password"
                    onClick={generatePassword}
                />
            </div>
        </>
    )
}

export default PasswordGeneratorButton
