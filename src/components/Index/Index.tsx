import React, {
    createContext,
    Dispatch,
    SetStateAction,
    useEffect,
    useState,
} from 'react'
import StickyNavigation from '../StickyNavigation/StickyNavigation'
import PasswordGenerator from '../PasswordGenerator/PasswordGenerator'

export type PasswordCharactersProps = {
    uppercase: boolean
    lowercase: boolean
    numbers: boolean
    symbols: boolean
}

export const ContextError = createContext<
    [string, Dispatch<SetStateAction<string>>] | undefined
>(undefined)

export const ContextPasswordLength = createContext<
    [number, Dispatch<SetStateAction<number>>] | undefined
>(undefined)

export const ContextGeneratedPassword = createContext<
    [string, Dispatch<SetStateAction<string>>] | undefined
>(undefined)

export const ContextPasswordCharacters = createContext<
    | [
          PasswordCharactersProps,
          Dispatch<SetStateAction<PasswordCharactersProps>>,
      ]
    | undefined
>(undefined)

const Index = () => {
    const [error, setError] = useState(
        'You must choose at least three categories'
    )
    const [passwordLength, setPasswordLength] = useState(12)
    const [generatedPassword, setGeneratedPassword] = useState(
        '*Generated Password*'
    )
    const [passwordCharacters, setPasswordCharacters] = useState({
        uppercase: true,
        lowercase: true,
        numbers: true,
        symbols: true,
    })

    useEffect(() => {
        const stickyNav = document.querySelector(
            '.stickyNavigation'
        ) as HTMLElement
        const updateMargin = () => {
            document.documentElement.style.setProperty(
                '--sticky-nav-height',
                `${stickyNav.offsetHeight + 16}px`
            )
        }

        updateMargin()
        window.addEventListener('resize', updateMargin)

        return () => {
            window.removeEventListener('resize', updateMargin)
        }
    }, [])

    useEffect(() => {
        const handleFocusTrap = (e: KeyboardEvent) => {
            const focusableButtons = Array.from(
                document.querySelectorAll<HTMLElement>('a, button, input')
            ).filter((item) => !item.hasAttribute('disabled'))
            const firstButton = focusableButtons[0]
            const lastButton = focusableButtons[focusableButtons.length - 1]

            if (
                e.key === 'Tab' &&
                !e.shiftKey &&
                document.activeElement === lastButton
            ) {
                e.preventDefault()
                firstButton?.focus()
            }

            if (
                e.key === 'Tab' &&
                e.shiftKey &&
                document.activeElement === firstButton
            ) {
                e.preventDefault()
                lastButton?.focus()
            }
        }

        document.addEventListener('keydown', handleFocusTrap)

        return () => {
            document.removeEventListener('keydown', handleFocusTrap)
        }
    }, [])

    return (
        <>
            <StickyNavigation />
            <ContextError.Provider value={[error, setError]}>
                <ContextPasswordLength.Provider
                    value={[passwordLength, setPasswordLength]}
                >
                    <ContextGeneratedPassword.Provider
                        value={[generatedPassword, setGeneratedPassword]}
                    >
                        <ContextPasswordCharacters.Provider
                            value={[passwordCharacters, setPasswordCharacters]}
                        >
                            <PasswordGenerator />
                        </ContextPasswordCharacters.Provider>
                    </ContextGeneratedPassword.Provider>
                </ContextPasswordLength.Provider>
            </ContextError.Provider>
        </>
    )
}

export default Index
