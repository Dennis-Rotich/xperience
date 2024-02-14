import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(){
    return(
        <nav>
            <NavLink to='/' className='navlink'>Home</NavLink>
            <NavLink to='/about' className='navlink'>About</NavLink>
            <NavLink to='/contacts' className='navlink'>Contacts</NavLink>
            <NavLink to='/SignUpForm' className='navlink'>Sign Up</NavLink>
            <form id="searchProduct">
                <input type="text" placeholder="search for product" name="search"/>
                <input type="submit" id="submit"/>
            </form>
        </nav>
    )
}

export default Navbar;