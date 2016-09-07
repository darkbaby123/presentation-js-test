import React, { PropTypes } from 'react'

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
}
export default function Counter({ counter, increment, decrement }) {
  return (
    <div>
      <h1>Count {counter}</h1>
      <button onClick={increment}>+</button>
      {' '}
      <button onClick={decrement}>-</button>
    </div>
  )
}
