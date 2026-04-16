import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  selectCartItems,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from '../features/cart/cartSlice';

const CartItem = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  // Calculate total cost for a single item (subtotal)
  const calculateTotalCost = (item) => {
    return item.price * item.quantity;
  };

  // Calculate total cart amount (sum of all subtotals)
  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleIncrement = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  const totalAmount = calculateTotalAmount();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your cart is empty</h2>
        <Link to="/plants">
          <button className="continue-shopping-btn">Continue Shopping</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      <div className="cart-items-list">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.thumbnail} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h4>{item.name}</h4>
              <p className="unit-price">Unit Price: ${item.price}</p>
              <div className="quantity-controls">
                <button onClick={() => handleDecrement(item.id)} aria-label="Decrease">-</button>
                <span className="quantity">{item.quantity}</span>
                <button onClick={() => handleIncrement(item.id)} aria-label="Increase">+</button>
              </div>
              <button className="delete-btn" onClick={() => handleDelete(item.id)}>
                🗑️ Delete
              </button>
            </div>
            <div className="cart-item-subtotal">
              {/* Display total cost for this plant type */}
              Total: ${calculateTotalCost(item).toFixed(2)}
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <p>Total Plants: <strong>{totalItems}</strong></p>
        {/* Display total cart amount */}
        <p>Total Amount: <strong>${totalAmount.toFixed(2)}</strong></p>
        <div className="cart-buttons">
          <Link to="/plants">
            <button className="continue-shopping-btn">Continue Shopping</button>
          </Link>
          <button className="checkout-btn" onClick={() => alert('Coming Soon!')}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
