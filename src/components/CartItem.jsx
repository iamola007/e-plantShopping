import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeItem } from '../features/cart/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  // Calculate subtotal for this plant type
  const subtotal = item.price * item.quantity;

  const handleIncrement = () => {
    dispatch(increaseQuantity(item.id));
  };

  const handleDecrement = () => {
    dispatch(decreaseQuantity(item.id));
  };

  const handleRemove = () => {
    dispatch(removeItem(item.id));
  };

  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h4>{item.name}</h4>
        <p className="unit-price">Unit Price: ${item.price}</p>
        <div className="quantity-controls">
          <button onClick={handleDecrement} aria-label="Decrease quantity">-</button>
          <span className="quantity">{item.quantity}</span>
          <button onClick={handleIncrement} aria-label="Increase quantity">+</button>
        </div>
        <button className="delete-btn" onClick={handleRemove}>
          🗑️ Delete
        </button>
      </div>
      <div className="cart-item-subtotal">
        Subtotal: ${subtotal.toFixed(2)}
      </div>
    </div>
  );
};

export default CartItem;
