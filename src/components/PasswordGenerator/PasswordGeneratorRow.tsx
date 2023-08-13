import React, { useEffect, useState } from 'react'

type Props = {
    id: string
    text?: string
    type: 'checkbox' | 'error' | 'number'
}

const PasswordGeneratorRow = ({ id, text, type }: Props) => {
    const [inputNumber, setInputNumber] = useState<number>(8)
    const onChangeNumber = (e: any) => {
        setInputNumber(e.target.value)
    }

    const [errorText, setErrorText] = useState<string>('no error')
    useEffect(() => {
        console.log(inputNumber < 8, 'inputnumber < 8')
        if (inputNumber < 8)
            setErrorText(
                'Your Password has to have a length of at least 8 characters.'
            )
    }, [inputNumber])

    const [checked, setChecked] = useState(false)
    const [value, setValue] = useState(false)

    // for password calculations
    useEffect(() => {
        if (checked) setValue(true)
        else setValue(false)
    })

    console.log('value', value)

    return (
        <div className="menu">
            <label>{text}</label>
            {(type === 'error' && (
                <span id={id} className="error">
                    {errorText}
                </span>
            )) ||
                (type === 'checkbox' && (
                    <input
                        id={id}
                        className="checkbox"
                        type="checkbox"
                        checked={checked}
                        onChange={() => setChecked(!checked)}
                    />
                )) || (
                    <input
                        id={id}
                        className="number"
                        type="number"
                        min="8"
                        value={inputNumber}
                        onChange={onChangeNumber}
                    />
                )}
        </div>
    )
}

export default PasswordGeneratorRow
