import React from 'react'
import Letter from './Letter'

const Solution = ({alphabet, solution: {word, hint}}) => {
  return (
  <>
    {word.split('').map((letter, index) => 
    <Letter 
      key={`${letter}-${index}`} 
      letter={alphabet[letter]? letter: '_'}/>
    )}
    <div><em>{hint}</em></div><br />
    
  </>)
}

export default Solution
