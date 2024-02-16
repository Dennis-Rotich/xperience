import React,{useState} from "react";
import { NavLink } from "react-router-dom";

function Navbar({products,setProducts,handleReturn}){
    const [searchTerm,setSearchTerm] = useState('');
    const [findProducts,setFindProducts] = useState([])

    function handleChange(e){
        setSearchTerm(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(searchTerm);
        e.target.search.value = '';
        const productToDisplay = products.find((product)=>{
            const title = product.title.toLowerCase();
            return title.includes(searchTerm.toLowerCase())
        })
        console.log(productToDisplay);
        setFindProducts([...findProducts,productToDisplay]);
        setProducts([...findProducts,productToDisplay]); 
    }

    return(
        <nav>
            <NavLink to='/' className='navlink'>Home</NavLink>
            <NavLink to='/about' className='navlink'>About</NavLink>
            <NavLink to='/contacts' className='navlink'>Contacts</NavLink>
            <NavLink to='/SignUpForm' className='navlink'>Sign Up</NavLink>
            <form id="searchProduct" onSubmit={handleSubmit}>
                <input type="text" placeholder="search for product" name="search" onChange={handleChange}/>
                <button type='submit'>Search</button>
            </form>
            <button id="returnBtn" onClick={handleReturn}>Return All items</button>
        </nav>
    )
}

export default Navbar;