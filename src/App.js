import React from 'react';
import './App.css';
import Contacts from './components/Contacts'
import Payments from './components/Payments'
import { Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/payments" element={<Payments/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
      </Routes> 
    </div>
  );
}

export default App;
