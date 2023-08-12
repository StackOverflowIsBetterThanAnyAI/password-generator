import React, { useEffect, useState } from 'react'

type Props = {
    id: string
    text: string
    type: string
}

const PasswordGeneratorRow = ({ id, text, type }: Props) => {
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
            {type === 'number' ? (
                <input id={id} className="number" type="number" min="8" />
            ) : (
                <input
                    id={id}
                    className="checkbox"
                    type="checkbox"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                />
            )}
        </div>
    )
}

export default PasswordGeneratorRow
