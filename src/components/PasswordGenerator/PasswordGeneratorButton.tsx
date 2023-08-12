import React, { useState } from 'react'

type Props = {
    buttonType: 'output' | 'generate'
}

const PasswordGeneratorButton = ({ buttonType }: Props) => {
    const [output, setOutput] = useState('Password')

    /*const returnPassword = () => {
        let error = checkError()
        if (error) {
            ;() => setOutput('Password')
            //document.getElementById('copy').style.display = 'none'
            return
        } else {
            //document.getElementById('output').innerHTML = generatePassword()
            //document.getElementById('copy').style.display = 'inline'
        }
    }

    const checkError = () => {
        console.log(document.getElementById('error'))
        let error = document.getElementById('error')
        let length = document.getElementById('length').value
        let lowerCase = document.getElementById('lowercase').checked
        let upperCase = document.getElementById('uppercase').checked
        let numbers = document.getElementById('numbers').checked
        let symbols = document.getElementById('symbols').checked
        let errorText = ''

        let items = [
            [lowerCase, 'lowerCase'],
            [upperCase, 'upperCase'],
            [numbers, 'number'],
            [symbols, 'symbol'],
        ]
        let selectedItemsLength = items.filter((i) => i[0] === true).length

        length < 8
            ? (errorText +=
                  'The password hast to have a length of at least 8 characters!</br>')
            : null
        selectedItemsLength < 2
            ? (errorText += 'You need to select at least two items!</br>')
            : null

        errorText ? (error.innerHTML = errorText) : (error.innerHTML = '')

        return errorText ? true : false
    }

    const generatePassword = () => {
        let length = document.getElementById('length').value
        let lowerCase = document.getElementById('lowercase').checked
        let upperCase = document.getElementById('uppercase').checked
        let numbers = document.getElementById('numbers').checked
        let symbols = document.getElementById('symbols').checked

        const generateLowerCase = () => {
            let key = Math.round(Math.random() * 25)
            return String.fromCharCode(key + 97)
        }
        const generateUpperCase = () => {
            let key = Math.round(Math.random() * 25)
            return String.fromCharCode(key + 65)
        }
        const generateNumber = () => {
            return Math.round(Math.random() * 9)
        }
        const generateSymbol = () => {
            const symbolsArray = [
                '!',
                '§',
                '$',
                '%',
                '&',
                '/',
                '(',
                ')',
                '=',
                '?',
                'ß',
                '{',
                '[',
                ']',
                '}',
                '@',
                '€',
                '*',
                '+',
                '~',
                '#',
                ',',
                ';',
                '.',
                ':',
                '-',
                '_',
                '>',
                '|',
            ]
            return symbolsArray[Math.round(Math.random() * 28)]
        }

        let items = [
            [lowerCase, 'lowerCase'],
            [upperCase, 'upperCase'],
            [numbers, 'number'],
            [symbols, 'symbol'],
        ]
        let password = ''
        let selectedItemsLength = items.filter((i) => i[0] === true).length
        let selectedItems = []

        for (let i = 0; i < items.length; i++) {
            items[i][0] === true ? selectedItems.push(items[i][1]) : null
        }

        for (let i = 0; i < length; i++) {
            let character =
                selectedItems[
                    Math.round(Math.random() * (selectedItemsLength - 1))
                ]

            switch (character) {
                case 'lowerCase':
                    password += generateLowerCase()
                    break
                case 'upperCase':
                    password += generateUpperCase()
                    break
                case 'number':
                    password += generateNumber()
                    break
                case 'symbol':
                    password += generateSymbol()
                    break
                default:
                    password += generateSymbol()
                    break
            }
        }
        return password
    }*/

    return (
        <>
            {buttonType === 'output' ? (
                <div className="output-container">
                    <div className="output" id="output">
                        {output}
                    </div>
                    <div className="copy-button">
                        <input
                            id="copy"
                            type="button"
                            value="Copy To Clipboard"
                            onClick={() => setOutput('jojojo')}
                        />
                    </div>
                </div>
            ) : (
                <div className="generate">
                    <input
                        id="button"
                        type="button"
                        value="Generate Password"
                        onClick={() => console.log('returnPassword')}
                    />
                </div>
            )}
        </>
    )
}

export default PasswordGeneratorButton
