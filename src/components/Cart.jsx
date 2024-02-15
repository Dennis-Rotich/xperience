import React from "react";
import { Link,useNavigate } from "react-router-dom";

function Cart({cartProducts}){
    const navigate = useNavigate();

    function handleGoBack(){
        navigate('/');
    }

    const displayCart = cartProducts.map((product,index)=>{
        return(
            <span className="productDisplay" key={index}>
            <Link className="productLink" to={`/productDetails/${product.id}`}>
                <img src={product.image} alt={product.title} className="productImage"/>
                <p className="priceTag">Price: ${product.price}</p>
            </Link>
        </span>
        )
    })

    return(
        <div>
            <h1 className='appTitle'><span className='appHeader'>Your</span> Cart</h1>
            {displayCart}
            <button onClick={handleGoBack} className="goBackButton">Go Back</button>
        </div>
    )
}

export default Cart;