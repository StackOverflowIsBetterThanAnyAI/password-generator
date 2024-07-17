import React, { useContext } from 'react'
import { ContextGeneratedPassword } from '../Index/Index'

const GeneratedPassword = () => {
    const contextGeneratedPassword = useContext(ContextGeneratedPassword)
    if (!contextGeneratedPassword) {
        throw new Error(
            'ContextGeneratedPassword must be used within a ContextGeneratedPassword.Provider'
        )
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [generatedPassword, setGeneratedPassword] = contextGeneratedPassword

    return (
        <div className="flexRow spaceBetween generatedPassword">
            <div>{generatedPassword}</div>
            <button
                className="copyPassword"
                onClick={() => navigator.clipboard.writeText(generatedPassword)}
                disabled={generatedPassword === '*Generated Password*'}
                aria-disabled={generatedPassword === '*Generated Password*'}
            >
                Copy
            </button>
        </div>
    )
}

export default GeneratedPassword
