import React,{useEffect,useState} from 'react';
import './App.css';
import Home from './components/Home';
import Contacts from './components/Contacts';
import { Routes, Route } from 'react-router-dom';
import About from './components/About'; // Assuming you want to include the About component
import Navbar from './components/Navbar'; // Assuming you want to include the Navbar component

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
      <h1 id='appTitle'><span>X</span>perience</h1>
      <Navbar/>
      <Routes>
        {/* Define the route tags here */}
        <Route path='/' element={<Home products={products}/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/about" element={<About/>}/> 
      </Routes>
    </div>
  );
}

export default App;
