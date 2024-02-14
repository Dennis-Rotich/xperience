import React from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import About from './components/About';

function App() {
  return (
    <div>
      <Routes>
        {/* Define the route tags here */}
        <Route path ='/about'element ={<About/>}/> 
        
      </Routes>
    </div>
  );
}

export default App;
