import React from 'react'

const EndGame = ({score, word, restartGame}) => {
  return (
    <>
      <div>{score <= 0? <><div>You Lost</div><div>Solution: {word}</div></>: 'Congratulations!'}</div>
      <button onClick={restartGame}>Play Again</button>
    </>
  )
}

export default EndGame
