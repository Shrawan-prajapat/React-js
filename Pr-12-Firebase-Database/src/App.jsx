import { BrowserRouter, Route, Routes } from "react-router-dom"
import View from "./pages/View"
import Add from "./pages/Add"


function App() {
 

  return (
  <div align="center">
    <div>
      <Add/>
    </div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<View/>}/>
    </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
