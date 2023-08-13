import React, { useState } from 'react'

type Props = {
    buttonType: 'output' | 'generate'
}

const PasswordGeneratorButton = ({ buttonType }: Props) => {
    const [output, setOutput] = useState('Password')

    return (
        <>
            {buttonType === 'output' ? (
                <div className="output-container">
                    <div className="output" id="output">
                        {output}
                    </div>
                    <div className="copy-button">
                        <input
                            id="copy"
                            type="button"
                            value="Copy To Clipboard"
                            onClick={() => setOutput('jojojo')}
                        />
                    </div>
                </div>
            ) : (
                <div className="generate">
                    <input
                        id="button"
                        type="button"
                        value="Generate Password"
                        onClick={() => console.log('returnPassword')}
                    />
                </div>
            )}
        </>
    )
}

export default PasswordGeneratorButton
