import React from "react";
import {Link} from 'react-router-dom';

function Home({products}){
    const displayProducts = products.map((product,index)=>{
        return(
            <span className="productDisplay" key={index}>
                <img src={product.image} alt={product.title}/>
                <p>Price: ${product.price}</p>
            </span>
        )
    })

    return(
        <div>
            <aside>
                <Link className="productList">Products</Link>
                <Link className="productList">Payments</Link>
                <Link className="productList">Cart</Link>
                <Link className="productList">Social Media</Link>
            </aside>
            <main>
                {displayProducts}
            </main>
        </div>
    )
}

export default Home;