import React from "react";
import { Link } from "react-router-dom";

function Home({products}){
    const displayProducts = products.map((product)=>{
        return(
            <span className="productListing">
                <h6>{product.title}</h6>
                <img src={product.image} alt={``}/>
            </span>
        )
    })

    return(
        <aside id="aside">
            <label className="sidebarProducts">Products</label>
            <select id="products" className="sidebarProducts">
                <option value="option1" className="sidebarProducts">Option 1</option>
                <option value="option2" className="sidebarProducts">Option 2</option>
                <option value="option3" className="sidebarProducts">Option 3</option>
            </select>
            <Link className="sidebarLink">Customers</Link>
            <Link className="sidebarLink">Payments</Link>
            <Link className="sidebarLink">Cart</Link>
            <Link className="sidebarLink">Social Media</Link>
        </aside>
    )
}

export default Home;