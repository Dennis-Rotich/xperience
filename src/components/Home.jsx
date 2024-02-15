import React from "react";
import {Link} from 'react-router-dom';

function Home({products}){

    const displayProducts = products.map((product,index)=>{
        return(
            <span className="productDisplay" key={index}>
                <Link className="productLink" to={`/productDetails/${product.id}`}>
                    <img src={product.image} alt={product.title} className="productImage"/>
                    <p>Price: ${product.price}</p>
                </Link>
            </span>
        )
    })

    return(
        <div>
            <aside>
                <Link className="productList">Products</Link>
                <Link className="productList" to='/payments'>Payments</Link>
                <Link className="productList" to='/cart'>Cart</Link>
                <Link className="productList">Social Media</Link>
            </aside>
            <main>
                {displayProducts}
            </main>
        </div>
    )
}

export default Home;