import React from "react";
import { Link } from "react-router-dom";

function Cart({cartProducts}){
    const displayCart = cartProducts.map((product,index)=>{
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
            {displayCart}
        </div>
    )
}

export default Cart;