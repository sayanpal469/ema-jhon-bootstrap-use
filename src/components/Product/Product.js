import React from 'react';
import './Product.css'
const Product = ({productData, addCart}) => {
    const {img, name, price, seller, ratings} = productData
    return (
        <div className='product'>
            
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price:$ {price}</p>
                <p>Manufacturer: {seller}</p>
                <p><small>Rating: {ratings}</small></p>
            </div>
            <button onClick={() => addCart(productData)} className='cart-btn'>Add to Cart</button>
        </div>
    );
};

export default Product;