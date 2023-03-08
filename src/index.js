import { createRoot } from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";


const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Home />} />
    
      
    </Routes>

  </BrowserRouter>
);