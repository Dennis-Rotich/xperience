import React from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <h1>Xperience</h1>
      <Navbar/>
      <Routes>
        {/* Define the route tags here */}
      </Routes>
    </div>
  );
}

export default App;
