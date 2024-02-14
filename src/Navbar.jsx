import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(){
    return(
        <div id="navbar">
            <NavLink to='/' className='navlink'>Home</NavLink> 
            <NavLink to='/contacts' className='navlink'>Contact</NavLink>
            <NavLink to='/about' className='navlink'>About</NavLink>
            <NavLink to='/SignUpForm' className='navlink'>Sign up</NavLink>
            <form id="searchBar">
                <input type="text" placeholder="Search for product" name="search"/>
                <input type="submit" name="submit"/>
            </form>
        </div>
    )
}

export default Navbar