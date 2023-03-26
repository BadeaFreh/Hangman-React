import React from 'react'
import Letter from './Letter'

const Letters = () => {
    const alpha = Array.from(Array(26)).map((e, i) => i + 65)
    const alphabet = alpha.map((x) => String.fromCharCode(x))

    return (
        <>
            {alphabet.map(letter => <Letter>{letter}</Letter>)}
        </>
    )
}

export default Letters