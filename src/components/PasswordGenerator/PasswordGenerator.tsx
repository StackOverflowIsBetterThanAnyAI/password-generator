import React, { useContext, useEffect } from 'react'
import './PasswordGenerator.css'
import PasswordGeneratorCheckbox from './PasswordGeneratorCheckbox'
import { ContextError, ContextPasswordCharacters } from '../Index/Index'
import GenerateButton from './GenerateButton'
import ErrorText from './ErrorText'
import PasswordLength from './PasswordLength'
import GeneratedPassword from './GeneratedPassword'

const PasswordGenerator = () => {
    const contextError = useContext(ContextError)
    if (!contextError) {
        throw new Error(
            'ContextError must be used within a ContextError.Provider'
        )
    }
    const [error, setError] = contextError

    const contextPasswordCharacters = useContext(ContextPasswordCharacters)
    if (!contextPasswordCharacters) {
        throw new Error(
            'ContextPasswordCharacters must be used within a ContextPasswordCharacters.Provider'
        )
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [passwordCharacters, setPasswordCharacters] =
        contextPasswordCharacters

    useEffect(() => {
        if (
            Object.values(passwordCharacters).filter((value) => value === true)
                .length >= 3
        )
            setError('')
        else setError('You must choose at least three categories')
    }, [passwordCharacters, setError])

    return (
        <main className="passwordGeneratorMain">
            <div className="passwordGeneratorWrapper">
                <GeneratedPassword />
                <PasswordLength />
                <PasswordGeneratorCheckbox
                    characterKey="uppercase"
                    id="uppercaseCheckbox"
                    label="Include Uppercase Letters"
                />
                <PasswordGeneratorCheckbox
                    characterKey="lowercase"
                    id="lowercaseCheckbox"
                    label="Include Lowercase Letters"
                />
                <PasswordGeneratorCheckbox
                    characterKey="numbers"
                    id="numberCheckbox"
                    label="Include Numbers"
                />
                <PasswordGeneratorCheckbox
                    characterKey="symbols"
                    id="symbolCheckbox"
                    label="Include Symbols"
                />
                {error.length > 0 && <ErrorText />}
                <GenerateButton />
            </div>
        </main>
    )
}

export default PasswordGenerator
