import React from 'react';
import { useSelector } from 'react-redux';
import "./../../css/Checkout.css"
function Checkout() {
    const checkoutItem = useSelector((state) => state.cart.checkoutItem);

    return (
        <div className='checkout-container'>
            {checkoutItem ? (
                <div className='checkout-item'>
                    <h2>{checkoutItem.title}</h2>
                    <img src={checkoutItem.image} alt={checkoutItem.title} className="checkout-image" />
                    <p><strong>Price:</strong> ${checkoutItem.price}</p>
                    <button className='btn btn-success'>Processed to Payment </button>
                </div>
            ) : (
                <p>No item selected for checkout.</p>
            )}

        </div>
    );
}

export default Checkout;
