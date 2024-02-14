import React from 'react';
import Assignment3 from "./a3";
import Assignment4 from "./a4";
import { Route, Routes, Link } from 'react-router-dom';
import Nav from '../Nav';

function Labs() {
  return (
    <div className="container-fluid">
      <h1>Labs</h1>
      <Nav />
      <Link to='./a3'>Assignment 3</Link> | 
      <Link to='./a4'> Assignment 4</Link>
      <Routes>
        <Route path='/a3' element={<Assignment3 />} />
        <Route path='/a4' element={<Assignment4 />} />
      </Routes>
      {/* <Assignment3 />
      <Assignment4 /> */}
    </div>
  );
}
 export default Labs;