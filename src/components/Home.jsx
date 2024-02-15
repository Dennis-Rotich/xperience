import React,{useState} from "react";
import {Link} from 'react-router-dom';

function Home({ products, setProducts }){
    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(false);
    const toggleProductsDropdown = () => {
        setIsProductsOpen(!isProductsOpen);
    };

    //handle click function
    const handleCategoryClick= (category) =>{
        console.log('category:', category);
        setSelectedCategory(category);
        setProducts(filterProducts);
    };


    //filter product
    const filterProducts= selectedCategory ? products.filter(product => product.category === selectedCategory) : products;

    console.log('Filter products:', filterProducts);
    

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
    // const displayFilteredProducts = filterProducts.map((product, index) => (
    //     <span className="productDisplay" key={index}>
    //         <Link className="productLink" to={`/productDetails/${product.id}`}>
    //             <img src={product.image} alt={product.title} className="productImage"/>
    //             <p className="priceTag">Price: ${product.price}</p>
    //         </Link>
    //     </span>
    // ));

    return(
        <div>
            <aside>
                <span className="dropdown-toggle"  onClick={toggleProductsDropdown}>Products</span>
                {isProductsOpen && (
                    <div className="dropdown-content" >
                        <Link className="productList" onClick={() => handleCategoryClick("women's clothing")} >Women's Clothing</Link>
                        <br/>
                        <Link className="productList" onClick={() => handleCategoryClick("men's clothing")}  >Men's Clothing</Link>
                        <br/>
                        <Link className="productList" onClick={() => handleCategoryClick("jewelery")}  >Jewelery</Link>
                        <br/>
                        <Link className="productList" onClick={() => handleCategoryClick("electronics")} >Electronics</Link>
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