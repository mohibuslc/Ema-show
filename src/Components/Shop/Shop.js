
import React, { useState } from 'react';
import Product from '../Product/Product';

import fakedata from '../source/fakeData/products.json';

import './Shop.css';

const Shop = () => {
    
  
const first10 = fakedata.slice(0 , 10);

const [product , setProduct]= useState(first10);

    return (
        <div className='shop-container'>

            <div className="product-container">
               
                {

                    product.map(pd => <Product product = {pd}></Product>)
            
                }
               
                </div>

               <div className="cart-container">

                <h2>This is Cart </h2>
                
               </div>
            
            
            
        </div>
    );
};

export default Shop;