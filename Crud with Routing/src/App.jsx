import { BrowserRouter, Route, Routes } from "react-router-dom"



import View from "./assets/pages/view";
import Add from "./assets/pages/Add";
import Edit from "./assets/pages/Edit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<View />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit" element={<Edit/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App