import React, { FC } from 'react'

type Props = {
    buttonType: 'output' | 'generate'
}

const PasswordGeneratorButton: FC<Props> = ({ buttonType }) => {
    return (
        <>
            {buttonType === 'output' ? (
                <div className="output-container">
                    <div className="output" id="output">
                        Password
                    </div>
                    <div className="copy-button">
                        <input
                            id="copy"
                            type="button"
                            value="Copy To Clipboard"
                            onClick={() => console.log('copyToClipBoard')}
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
