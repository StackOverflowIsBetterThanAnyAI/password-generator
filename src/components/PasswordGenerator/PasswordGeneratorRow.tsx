import React, { FC, useState } from 'react'

type Props = {
    text: string
    type: string
}

const PasswordGeneratorRow: FC<Props> = ({ text, type }) => {
    const [checked, setChecked] = useState(false)

    return (
        <div className="menu">
            <label>{text}</label>
            {type === 'number' ? (
                <input className="number" type="number" min="8" />
            ) : (
                <input
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
