import Home from "./home.jsx"

import Bookshelf from "./bookshelf.jsx";
import Todolist from "./todolist.jsx";
import { HashRouter, Routes, Route } from "react-router-dom";
function App() {


  return (
  
    <HashRouter>
      <Routes>
      
          <Route path="/" element={<Home />} />
          <Route path="/bookshelf" element={<Bookshelf />} />
          <Route path="/todolist" element={<Todolist />} />
          
      </Routes>
    </HashRouter>
 
  )
}

export default App
