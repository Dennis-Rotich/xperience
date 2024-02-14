import React from 'react';
import './App.css';
import Contacts from './Contacts'
import { Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <h1>Xperience</h1>
      <Navbar/>
      <Routes>
        <Route path="/contacts" element={<Contacts/>}/>
      </Routes>
    </div>
  );
}

export default App;
