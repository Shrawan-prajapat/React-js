import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [no, setNo] = useState(0)
  const Increment = ()=>{
    setNo(no+1)
  }

  const Decrement = ()=>{
    setNo(no-1)
  }
  const Reset = ()=>{
    setNo(0)
  }
  return (
   <div align="center">
    <h1>Counter</h1>
    <h2>Count:- {no}</h2>
    <input type="button" onClick={ () => Increment() } value="+"/>
    <input type="button" onClick={ () => Reset() } value="Reset"/>
    {
      no==0
      ? <input type="button" disabled onClick={ () => Decrement() } value="-"/>
      : <input type="button" onClick={ () => Decrement() } value="-"/>
    }
   </div>
  )
}

export default App
