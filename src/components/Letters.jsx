import React from 'react'
import Letter from './Letter'

const Letters = ({alphabet, selectLetter}) => {
    return (
        <>
        <div>Available Letters:</div>
        {Object.keys(alphabet).map((letter) => {
            return (
                <Letter 
                key={letter} 
                isClicked={alphabet[letter]? 'guessed': ''} 
                selectLetter={selectLetter} 
                letter={letter} />
            )
            })}
        </>
    )
}

export default Letters
