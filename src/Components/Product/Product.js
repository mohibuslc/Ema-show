import React from 'react';
import './Product.css'
const Product = (props) => {

  const {name , img , seller, stock, price} = props.product ; 

    return (
        
        <div className="product">

            <div>

            <img src = {img} alt='/'></img>
 
            </div>


            <div id='products-container'>

                <h4 className="product-name"> {name}</h4>
                <h3>Price : ${price}</h3>
                <p>By Seller name : {seller}</p>
                <p>Stock: {stock}</p>

                <button className='btn-container'>Select_Product</button>
            </div>


        </div>
    )
};

export default Product;