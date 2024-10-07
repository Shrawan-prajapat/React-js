import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Counter } from './context/Countercontext.jsx'

createRoot(document.getElementById('root')).render(

    <Counter>
        <App />
    </Counter>

)
