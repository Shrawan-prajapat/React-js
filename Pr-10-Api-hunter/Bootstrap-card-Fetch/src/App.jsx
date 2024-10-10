import { BrowserRouter, Route, Routes } from "react-router-dom"
import Todo from "./pages/Todo"
function App() {
 

  return (
   <div>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Todo/>}/>
   </Routes>
   </BrowserRouter>
   </div>
  )
}

export default App
