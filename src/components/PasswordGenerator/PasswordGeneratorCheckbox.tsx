import React, { FC, useContext } from 'react'
import {
    ContextPasswordCharacters,
    PasswordCharactersProps,
} from '../Index/Index'

type PasswordGeneratorCheckboxProps = {
    characterKey: keyof PasswordCharactersProps
    id: string
    label: string
}

const PasswordGeneratorCheckbox: FC<PasswordGeneratorCheckboxProps> = ({
    characterKey,
    id,
    label,
}) => {
    const contextPasswordCharacters = useContext(ContextPasswordCharacters)
    if (!contextPasswordCharacters) {
        throw new Error(
            'ContextPasswordCharacters must be used within a ContextPasswordCharacters.Provider'
        )
    }
    const [passwordCharacters, setPasswordCharacters] =
        contextPasswordCharacters

    const handleChange = (characterKey: keyof PasswordCharactersProps) => {
        setPasswordCharacters({
            ...passwordCharacters,
            [characterKey]: !passwordCharacters[characterKey],
        })
    }

    return (
        <div className="flexRow checkbox marginBottom">
            <input
                type="checkbox"
                id={id}
                onChange={() => handleChange(characterKey)}
                checked={passwordCharacters[characterKey]}
            />
            <label htmlFor={id}>{label}</label>
        </div>
    )
}

export default PasswordGeneratorCheckbox
