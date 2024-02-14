import React,{useEffect,useState} from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import './App.css'
import Navbar from './components/Navbar.jsx'

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
      <Routes>
        {/* Define the route tags here */}
        <Route path='/' element={<Home products={products}/>}/>
      </Routes>
    </div>
  );
}

export default App;
