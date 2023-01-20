import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from "./home";
import Servicos from './pages/Servicos';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home  />}/>
        <Route path="/servicos" element={<Servicos  />}/>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
