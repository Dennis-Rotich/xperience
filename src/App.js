import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contacts from './components/Contacts';
import Home from './components/Home';
import SignUpForm from './components/SignUpForm';
import Navbar from './components/Navbar';
import Payments from './components/Payments';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [cartProducts,setCartProducts] = useState([]);
  const [name,setName] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1 className='appTitle'>
        <span className='appHeader'>X</span>perience
      </h1>
      <h3>Logged in as: {name}</h3>
      <Navbar products={products} setProducts={setProducts} />
      <br />
      <Routes>
        <Route path='/' element={<Home products= {products} setProducts={setProducts} />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/signUpForm' element={<SignUpForm setName={setName}/>} />
        <Route path='/payments' element={<Payments />} />
        <Route path='/cart' element={<Cart  cartProducts={cartProducts}/>} />
        <Route path='/productDetails/:id' element={<ProductDetails products={products} cartProducts={cartProducts} setCartProducts={setCartProducts}/> }/>
      </Routes>
    </div>
  );
}

export default App;
