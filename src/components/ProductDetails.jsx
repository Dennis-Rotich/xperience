import React from "react";
import { useParams,useNavigate } from "react-router-dom";

function ProductDetails({products,cartProducts,setCartProducts}){
    const params = useParams();
    const navigate = useNavigate();
    const displayDetails = products.find((product)=>{
        return product.id === parseInt(params.id)
    })

    function handleAddToCart(product){
        setCartProducts([...cartProducts,product]);
    }

    function handleHomeNavigate(){
         navigate('/');
    }

    return(
        <div className="productDetail">
            <h1>{displayDetails.title}</h1>
            <img  src={displayDetails.image} alt={displayDetails.title} className="productImage"/>
            <p>{displayDetails.description}</p>
            <h2>Price: ${displayDetails.price}/piece</h2>
            <button onClick={()=>{handleAddToCart(displayDetails)}} >Add to Cart</button>
            <button className="navBtn" onClick={handleHomeNavigate}>Go back Home</button>
        </div>
    )
}

export default ProductDetails