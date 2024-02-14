import React from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import About from './components/About';

function App() {
  return (
    <div>
      <Routes>
        <Route path ='/about'element ={<About/>}/> 
        {/* Define the route tags here */}
      </Routes>
    </div>
  );
}

export default App;
