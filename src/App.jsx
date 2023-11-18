import Home from "./home.jsx"
import Pis from "./projects/pis";
import Hackathon from "./projects/hackathonSubmission";
import Bookshelf from "./projects/bookshelf.jsx";
import Todolist from "./projects/todolist.jsx";
import Mx360 from "./projects/mx360.jsx";

import { HashRouter, Routes, Route } from "react-router-dom";
function App() {


  return (
  
    <HashRouter>
      <Routes>
      
          <Route path="/" element={<Home />} />
          <Route path="/bookshelf" element={<Bookshelf />} />
          <Route path="/todolist" element={<Todolist />} />
          <Route path="/pis" element={<Pis />} />
          <Route path="/hackathon-submission" element={<Hackathon />} />
          <Route path="/mx360" element={<Mx360 />} />
          
      </Routes>
    </HashRouter>
 
  )
}

export default App
