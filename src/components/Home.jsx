import React,{useState} from "react";
import {Link} from 'react-router-dom';

function Home({ products }){
    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const toggleProductsDropdown = () => {
        setIsProductsOpen(!isProductsOpen);
    };
    
    const displayProducts = products.map((product,index)=>{
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
            <aside>
                <span className="dropdown-toggle"  onClick={toggleProductsDropdown}>Products</span>
                {isProductsOpen && (
                    <div className="dropdown-content" >
                        <Link className="productList" to='/products/womens-clothing'>Women's Clothing</Link>
                        <br/>
                        <Link className="productList" to='/products/mens-clothing'>Men's Clothing</Link>
                        <br/>
                        <Link className="productList" to='/products/jewelry'>Jewelry</Link>
                        <br/>
                        <Link className="productList" to='/products/electronics'>Electronics</Link>
                    </div>)}
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