import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './components/About'; // Importing About component


function App() {
  return (
    <div>
      <Routes>
        <Route path="/about" element={<About />} /> {/* Route for About component */}
        
      </Routes>
    </div>
  );
}

export default App;
