import { useContext, useState } from 'react'
import { Countercontext } from './context/Countercontext'


function App() {
  const {no,increment,decrement}=useContext(Countercontext)

  return (
    
    <div>
      <h1>Counter: {no}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default App
