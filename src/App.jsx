import Home from "./home.jsx"

import Bookshelf from "./bookshelf.jsx";
import Todolist from "./todolist.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {


  return (
  
    <BrowserRouter>
      <Routes>
      
          <Route path="/" element={<Home />} />
          <Route path="/bookshelf" element={<Bookshelf />} />
          <Route path="/todolist" element={<Todolist />} />
          
      </Routes>
    </BrowserRouter>
 
  )
}

export default App
