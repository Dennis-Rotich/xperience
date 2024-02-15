import React,{useState,useEffect} from 'react';
import { Routes,Route } from 'react-router-dom';
import About from './components/About';
import Contacts from './components/Contacts';
import Home from './components/Home';
import SignUpForm from './components/SignUpForm';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const [products,setProducts]=useState([])

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then((data)=>{
      setProducts(data)
    })
    .catch(err => console.error(err))
  },[])

  return (
    <div>
      <h1 id='appTitle'><span id='appHeader'>X</span>perience</h1>
      <Navbar/>
      <br/>
      <Routes>
        <Route path='/' element={<Home products={products}/>}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contacts' element={<Contacts />}/>
        <Route path='/signUpForm' element={<SignUpForm/>}/>
      </Routes>
    </div>
  );
}

export default App;
