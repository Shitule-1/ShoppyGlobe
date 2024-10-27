import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, increaseQuantity, decreaseQuantity, setCheckoutItem } from '../redux/features/Slice';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/Cart.css";
import { Link } from 'react-router-dom';

function Cart() {
    const items = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const handleRemoveItem = (index) => {
        dispatch(removeItem(index));
    };

    const handleIncreaseQuantity = (index) => {
        dispatch(increaseQuantity(index));
        alert("1 Quantity Added of this Item");
    };

    const handleDecreaseQuantity = (index) => {
        if (dispatch(decreaseQuantity(index))) {
            alert("1 Quantity Removed of this Item");
        }
    };

    const buy = (item) => {
        console.log("Buying item:", item); // Check if the item is correct
        dispatch(setCheckoutItem({ title: item.title, image: item.thumbnail, price: item.price }));
    };

    return (
        <div className='cart-container'>
            {items.length > 0 ? (
                <ul className='cart-list'>
                    {items.map((item, index) => (
                        <li key={index} className='cart-item'>
                            <div className='cart-image'>
                                <img src={item.thumbnail} alt={item.title} />
                            </div>
                            <div className='cart-details'>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <p><strong>Brand:</strong> {item.brand}</p>
                                <p><strong>Category:</strong> {item.category}</p>
                                <p><strong>Rating:</strong> {item.rating}</p>
                                <p><strong>Price:</strong> ${item.price}</p>
                            </div>
                            <div className='cart-controls'>
                                <button onClick={() => handleDecreaseQuantity(index)} className="btn-quantity">-</button>
                                <span>Quantity: {item.quantity || 1}</span>
                                <button onClick={() => handleIncreaseQuantity(index)} className="btn-quantity">+</button>
                            </div>
                            <button className='btn-remove' onClick={() => handleRemoveItem(index)}>
                                <i className="bi bi-trash3-fill"></i> Remove
                            </button>
                            
                            <Link to="/checkout" onClick={() => buy(item)}>
                                <button className='btn btn-success'>Buy</button>
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className='empty-cart'>Your cart is empty.</p>
            )}
        </div>
    );
}

export default Cart;
