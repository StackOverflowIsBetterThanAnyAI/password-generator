import React, { useEffect, useState, useRef } from 'react'
import PasswordGeneratorRowItem from './PasswordGeneratorRowItem'

const PasswordGeneratorRow = () => {
    // value for password length
    const [inputNumber, setInputNumber] = useState<number>(8)
    const onChangeNumber = (e: any) => {
        setInputNumber(e.target.value)
    }

    // value for checkbox items
    const rowItems = useRef([
        {
            id: 'uppercase',
            checked: false,
            label: 'Contains Uppercase Letters',
        },
        {
            id: 'lowercase',
            checked: false,
            label: 'Contains Lowercase Letters',
        },
        { id: 'numbers', checked: false, label: 'Contains Numbers' },
        { id: 'symbols', checked: false, label: 'Contains Symbols' },
    ])

    const checkedCounter = useRef<number>(0)

    const handleRowItemChange = (id: string) => {
        const updatedRowItems = rowItems.current.map((rowItem) =>
            rowItem.id === id
                ? { ...rowItem, checked: !rowItem.checked }
                : rowItem
        )
        rowItems.current = updatedRowItems
        checkedCounter.current = rowItems.current.filter(
            (rowItem) => rowItem.checked === true
        ).length
    }

    // Find the item with id "uppercase"
    /*const uppercaseItem = rowItems.find((item) => item.id === 'uppercase')
    const uppercaseChecked = uppercaseItem ? uppercaseItem.checked : false

    console.log(uppercaseChecked)*/

    // value for error text
    const [errorText, setErrorText] = useState<string>('no error')
    useEffect(() => {
        if (inputNumber < 8)
            setErrorText(
                'Your Password has to have a length of at least 8 characters.'
            )
        // not working
        if (checkedCounter.current <= 2)
            setErrorText(
                'You need to tick at least three categories for your password.'
            )
        else {
            setErrorText('')
        }
    }, [checkedCounter.current, inputNumber])

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
                {rowItems.current.map((rowItem) => (
                    <div className="menu" key={rowItem.id}>
                        <label>{rowItem.label}</label>
                        <PasswordGeneratorRowItem
                            id={rowItem.id}
                            label={rowItem.label}
                            setChecked={handleRowItemChange}
                        />
                    </div>
                ))}
            </div>
            <span className="error">{errorText}</span>
        </>
    )
}

export default PasswordGeneratorRow
