import React from 'react';
import './Order.css'
const Order = ({cart}) => {
    let total = 0;
    let shipping = 0;
    for(const product of cart) {
        total = total + product.price
        shipping = shipping + product.shipping
    }

    let tax = total * 10 / 100
    console.log(tax);

    const grandTotal = total + shipping + tax

    return (
        <div className='order'>
            <h2 className='text-center mb-5'>Order Summary</h2>
            <p>Selected Items: ${cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Price: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h6>Grand Total: ${grandTotal}</h6>
        </div>
    );
};

export default Order;