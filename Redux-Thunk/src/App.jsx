import { BrowserRouter, Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from "./pages/Users/Home"
import Dashboard from "./pages/Admin/Dashboard"
import User from "./pages/Admin/User"
import Product from "./pages/Admin/Product"



function App() {
  return (
    <>
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>


      {/* Admin Route */}
      <Route path="/admin" element={<Dashboard/>}/>
      <Route path="/admin/users" element={<User/>}/>
      <Route path="/admin/product" element={<Product/>}/>
    </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
