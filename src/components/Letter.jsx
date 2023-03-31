import React from 'react'
import './Letter.css'

const Letter = ({selectLetter, letter, isClicked}) => {
  return (
    <span onClick={() => selectLetter(letter)} className={isClicked}> {letter} </span>
  )
}

export default Letter
