import React from 'react'

const PasswordGeneratorRowItem = ({ id, setChecked }: any) => {
    return (
        <input
            className="checkbox"
            type="checkbox"
            onChange={() => setChecked(id)}
        />
    )
}

export default PasswordGeneratorRowItem
