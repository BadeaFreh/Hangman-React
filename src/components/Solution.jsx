import React from 'react'

const Solution = () => {
  return ( <>
    {[...Array(4).fill(<span> _ </span>)].map(underscore => underscore)}
    <div><em>Your ideal mood when coding</em></div>
    </>
  )
}

export default Solution
