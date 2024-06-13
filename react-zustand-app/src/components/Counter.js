import React from 'react'
import { useCounterStore } from '../store/useCounterStore'

const Counter = () => {
  const { count, increment, reset, setNumber, decrement } = useCounterStore()

  const keyboardEvent = (e) => {
    if (e.keyCode === 32) {
      increment()
    }
  }

  const clear = () => {
    useCounterStore.persist.clearStorage()
  }

  return (
    <div onKeyDown={keyboardEvent} tabIndex='0' style={{ backgroundColor: 'gray', padding: '10px', marginBottom: '20px' }}>
      <p style={{ color: 'orange', fontWeight: 900, fontSize: '50px' }}>[&nbsp;{count}&nbsp;]</p>
      <button onClick={increment}>one up</button>
      <button onClick={decrement}>one down</button>
      <button onClick={reset}>reset</button>
      <button onClick={() => setNumber(3)}>3</button>
      <button onClick={clear}>CLEAR</button>
    </div>
  )
}

export default Counter
