import React from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import SignUpForm from './components/SignUpForm';

function App() {
  return (
    <div>

        {/* Define the route tags here */}
        <SignUpForm />
  
    </div>
  );
}

export default App;
