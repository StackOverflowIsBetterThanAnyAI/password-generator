import React, { useEffect, useState } from 'react'

const PasswordGeneratorRow = () => {
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
        else {
            setErrorText('no Error')
        }
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
        <>
            <div className="menu">
                <label>Password Length</label>
                <input
                    className="number"
                    type="number"
                    min="8"
                    value={inputNumber}
                    onChange={onChangeNumber}
                />
            </div>
            <div className="menu">
                <label>Contains Uppercase Letters</label>
                <input
                    className="checkbox"
                    type="checkbox"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                />
            </div>
            <div className="menu">
                <label>Contains Lowercase Letters</label>
                <input
                    className="checkbox"
                    type="checkbox"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                />
            </div>
            <div className="menu">
                <label>Contains Numbers</label>
                <input
                    className="checkbox"
                    type="checkbox"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                />
            </div>
            <div className="menu">
                <label>Contains Symbols</label>
                <input
                    className="checkbox"
                    type="checkbox"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                />
            </div>
            <span className="error">{errorText}</span>
        </>
    )
}

export default PasswordGeneratorRow
