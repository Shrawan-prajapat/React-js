import { BrowserRouter, Route, Routes } from "react-router-dom"

import Add from "./pages/Add"


function App() {


  return (
 <div>
  <BrowserRouter>
  <Routes>
   
    <Route path="/" element={<Add/>}/>

    
  </Routes>
  </BrowserRouter>
 </div>
  )
}

export default App
