import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ParentComponent from './ParentComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <ParentComponent/>
  </div>
  )
}

export default App
