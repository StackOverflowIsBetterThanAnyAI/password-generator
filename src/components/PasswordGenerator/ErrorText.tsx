import React, { useContext } from 'react'
import { ContextError } from '../Index/Index'

const ErrorText = () => {
    const contextError = useContext(ContextError)
    if (!contextError) {
        throw new Error(
            'ContextError must be used within a ContextError.Provider'
        )
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [error, setError] = contextError

    return (
        <div className="textCenter">
            <span className="error">! </span>
            <span>{error}</span>
            <span className="error"> !</span>
        </div>
    )
}

export default ErrorText
