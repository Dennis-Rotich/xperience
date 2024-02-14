import React from 'react';
import './App.css';
import Contacts from './Contacts'
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/contacts" element={<Contacts/>}/>
      </Routes>
    </div>
  );
}

export default App;
