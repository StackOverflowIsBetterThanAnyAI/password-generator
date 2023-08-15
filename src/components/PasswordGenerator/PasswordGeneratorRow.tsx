import React, { useEffect, useState } from 'react'
import PasswordGeneratorRowItem from './PasswordGeneratorRowItem'

const PasswordGeneratorRow = () => {
    // value for password length
    const [inputNumber, setInputNumber] = useState<number>(8)
    const onChangeNumber = (e: any) => {
        setInputNumber(e.target.value)
    }

    // value for error text
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

    // value for checkbox items
    const [rowItems, setRowItems] = useState([
        { id: 'uppercase', checked: true, label: 'Contains Uppercase Letters' },
        { id: 'lowercase', checked: true, label: 'Contains Lowercase Letters' },
        { id: 'numbers', checked: true, label: 'Contains Numbers' },
        { id: 'symbols', checked: true, label: 'Contains Symbols' },
    ])

    const handleRowItemChange = (id: string) => {
        const updatedRowItems = rowItems.map((rowItem) =>
            rowItem.id === id
                ? { ...rowItem, checked: !rowItem.checked }
                : rowItem
        )
        setRowItems(updatedRowItems)
    }

    // Find the item with id "uppercase"
    const uppercaseItem = rowItems.find((item) => item.id === 'uppercase')
    const uppercaseChecked = uppercaseItem ? uppercaseItem.checked : false

    console.log(uppercaseChecked)

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
                {rowItems.map((rowItem) => (
                    <div className="menu" key={rowItem.id}>
                        <label>{rowItem.label}</label>
                        <PasswordGeneratorRowItem
                            key={rowItem.id}
                            id={rowItem.id}
                            checked={rowItem.checked}
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
