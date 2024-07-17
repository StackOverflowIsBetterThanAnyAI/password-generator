import React, { useContext } from 'react'
import { ContextPasswordLength } from '../Index/Index'

const PasswordLength = () => {
    const contextPasswordLength = useContext(ContextPasswordLength)
    if (!contextPasswordLength) {
        throw new Error(
            'ContextPasswordLength must be used within a ContextPasswordLength.Provider'
        )
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [passwordLength, setPasswordLength] = contextPasswordLength

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordLength(parseInt(e.target.value))
    }

    return (
        <div className="flexColumn marginX marginBottom">
            <div className="flexRow spaceBetween">
                <label htmlFor="characterSlider">Password Length</label>
                <span>{passwordLength}</span>
            </div>
            <input
                type="range"
                id="characterSlider"
                className="flexRow marginBottom"
                min={8}
                max={30}
                step={1}
                value={passwordLength}
                onChange={handleSliderChange}
            />
        </div>
    )
}

export default PasswordLength
