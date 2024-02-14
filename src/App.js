import React,{useEffect,useState} from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';

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
      </Routes>
    </div>
  );
}

export default App;
