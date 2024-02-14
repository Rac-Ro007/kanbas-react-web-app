import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import HelloWorld from "./Labs/a3/hello";
import { HashRouter } from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router';


function App() {
   return (
      <HashRouter>
         <Routes>
            {/* If you find path with 'hello' render element helloWorld */}
            <Route path="/" element={<Navigate to="/Labs/a3" />} />
            <Route path="/hello" element={<HelloWorld />} />
            <Route path="/Labs/*" element={<Labs />} />
            <Route path="/Kanbas/*" element={<Kanbas />} />
         </Routes>
      </HashRouter>
  );
}

export default App;
