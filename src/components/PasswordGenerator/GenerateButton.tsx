import React, { useContext } from 'react'
import {
    ContextError,
    ContextGeneratedPassword,
    ContextPasswordCharacters,
    ContextPasswordLength,
} from '../Index/Index'

const GenerateButton = () => {
    const contextError = useContext(ContextError)
    if (!contextError) {
        throw new Error(
            'ContextError must be used within a ContextError.Provider'
        )
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

    const contextPasswordLength = useContext(ContextPasswordLength)
    if (!contextPasswordLength) {
        throw new Error(
            'ContextPasswordLength must be used within a ContextPasswordLength.Provider'
        )
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [passwordLength, setPasswordLength] = contextPasswordLength

    const contextGeneratedPassword = useContext(ContextGeneratedPassword)
    if (!contextGeneratedPassword) {
        throw new Error(
            'ContextGeneratedPassword must be used within a ContextGeneratedPassword.Provider'
        )
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [generatedPassword, setGeneratedPassword] = contextGeneratedPassword

    const uppercaseItems = passwordCharacters.uppercase
        ? Array.from({ length: 26 }, (_, index) =>
              String.fromCharCode(index + 65)
          )
        : []
    const lowercaseItems = passwordCharacters.lowercase
        ? Array.from({ length: 26 }, (_, index) =>
              String.fromCharCode(index + 97)
          )
        : []
    const numberItems = passwordCharacters.numbers
        ? Array.from({ length: 10 }, (_, index) => index.toString())
        : []
    const symbolItems = passwordCharacters.symbols
        ? Array.from('!"§$%&/()=?{[]}\\@€*+~\'#<>|,;.:-_')
        : []

    const allItems = [
        ...uppercaseItems,
        ...lowercaseItems,
        ...numberItems,
        ...symbolItems,
    ]

    const generatePassword = () => {
        let password = ''

        for (let i = 0; i < passwordLength; i++) {
            password += allItems[Math.floor(Math.random() * allItems.length)]
        }

        const hasUppercase = passwordCharacters.uppercase
            ? /[A-Z]/.test(password)
            : true
        const hasLowercase = passwordCharacters.lowercase
            ? /[a-z]/.test(password)
            : true
        const hasNumbers = passwordCharacters.numbers
            ? /\d/.test(password)
            : true
        const hasSymbols = passwordCharacters.symbols
            ? /[!"§$%&/()=?{[\]}\\@€*+~'#<>|,;.:\-_]/.test(password)
            : true

        if (hasUppercase && hasLowercase && hasNumbers && hasSymbols) {
            setGeneratedPassword(
                password
                    .split('')
                    .sort(() => 0.5 - Math.random())
                    .join('')
            )
        } else generatePassword()
    }

    return (
        <button
            className="generateButton"
            disabled={!!error}
            aria-disabled={!!error}
            onClick={generatePassword}
        >
            Generate
        </button>
    )
}

export default GenerateButton
