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

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(()=>{
    console.log('Cart Products',cartProducts);
  },[cartProducts])

  return (
    <div>
      <h1 id='appTitle'>
        <span id='appHeader'>X</span>perience
      </h1>
      <Navbar />
      <br />
      <Routes>
        <Route path='/' element={<Home products={products} />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/signUpForm' element={<SignUpForm />} />
        <Route path='/payments' element={<Payments />} />
        <Route path='/cart' element={<Cart  cartProducts={cartProducts}/>} />
        <Route path='/productDetails/:id' element={<ProductDetails products={products} cartProducts={cartProducts} setCartProducts={setCartProducts}/>}/>
      </Routes>
    </div>
  );
}

export default App;
