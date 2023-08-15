import React from 'react'

const PasswordGeneratorRowItem = ({ id, checked, setChecked }: any) => {
    return (
        <input
            className="checkbox"
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(id, !checked)}
        />
    )
}

export default PasswordGeneratorRowItem
