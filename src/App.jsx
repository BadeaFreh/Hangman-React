import React, { useState } from 'react'
import Solution from './components/Solution'
import Score from './components/Score'
import Letters from './components/Letters'
import EndGame from './components/EndGame'
const DEFAULT_SCORE = 100

const getLetterStatus = () => {
  const letterStatus = {}
  const lettersAsciiVals = Array.from(Array(26)).map((e, i) => i + 97)
  for (let i = 0; i < lettersAsciiVals.length; i++) {
    let letter = String.fromCharCode(lettersAsciiVals[i])
    letterStatus[letter] = false
  }
  return letterStatus
}

const App = () => {
  const words = [
    {word: "apple", hint: "very popular fruit"},
    {word: "ameer", hint: "fond of cats"},
    {word: "water", hint: "you can't live without this"}
  ]

  const [solution, setSolution] = useState(words[Math.floor(Math.random() * words.length)])
  const [score, setScore] = useState(DEFAULT_SCORE)
  const [letterStatus, setLetterStatus] = useState(getLetterStatus())
  
  const selectLetter = (letter) => {
    setLetterStatus({...letterStatus, [letter]: true})
    if (letterStatus[letter] === true) {
      return
    }
    if (solution.word.split('').includes(letter)) {
      setScore(score + 5)
    }
    else {
      setScore(score - 20)
    }
  }

  const isGameOver = () => {
    return solution.word.split('').every(letter => letterStatus[letter] === true) || score <= 0
  }

  const restartGame = () => {
    setSolution(words[Math.floor(Math.random() * words.length)])
    setScore(DEFAULT_SCORE)
    setLetterStatus(getLetterStatus())
  }

  return (
    <>
      {isGameOver()? <EndGame score={score} word={solution.word} restartGame={restartGame}/>:
      <div>
        <Score score={score}/>
        <Solution alphabet={letterStatus} solution={solution}/>
        <Letters alphabet={letterStatus} selectLetter={selectLetter}/>
      </div>
      }
    </>
  )
}

export default App
