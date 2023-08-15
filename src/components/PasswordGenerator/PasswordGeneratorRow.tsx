import React, { useEffect, useState, useRef } from 'react'
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
        if (inputNumber < 8)
            setErrorText(
                'Your Password has to have a length of at least 8 characters.'
            )
        else {
            setErrorText('no Error')
        }
    }, [inputNumber])

    // value for checkbox items
    const rowItems = useRef([
        { id: 'uppercase', checked: true, label: 'Contains Uppercase Letters' },
        { id: 'lowercase', checked: true, label: 'Contains Lowercase Letters' },
        { id: 'numbers', checked: true, label: 'Contains Numbers' },
        { id: 'symbols', checked: true, label: 'Contains Symbols' },
    ])

    const checkedCounter = useRef<number>(4)

    const handleRowItemChange = (id: string) => {
        const updatedRowItems = rowItems.current.map((rowItem) =>
            rowItem.id === id
                ? { ...rowItem, checked: !rowItem.checked }
                : rowItem
        )
        console.log(updatedRowItems)
        rowItems.current = updatedRowItems
        checkedCounter.current = rowItems.current.filter(
            (rowItem) => rowItem.checked === true
        ).length
        console.log(checkedCounter.current, 'hansi')
    }

    // working perfectly fine btw, just the checkbox is not updating - checkedCounter is synchronous again :DDD

    // Find the item with id "uppercase"
    /*const uppercaseItem = rowItems.find((item) => item.id === 'uppercase')
    const uppercaseChecked = uppercaseItem ? uppercaseItem.checked : false

    console.log(uppercaseChecked)*/

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
