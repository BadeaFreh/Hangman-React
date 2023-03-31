import React from 'react'
import './Score.css'

const Score = ({score}) => {
  return (
    <div className={score < 50? 'low-score': score < 80? 'medium-score': 'high-score'}>{score}</div>
  )
}

export default Score
