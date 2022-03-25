import React, { useEffect, useState } from 'react';
import Order from '../Orders/Order';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
    }

    useEffect( () => {
        fetch(`products.json`)
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className='shop-container'>
           <div className='product-container'>
           {
                products.map(product => <Product key={product.id} productData={product} addCart={addToCart}></Product>)
            }
           </div>

           <div className='order-summray'>
               <Order cart={cart}></Order>
           </div>
        </div>
    );
};

export default Shop;