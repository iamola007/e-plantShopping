import React from "react";
import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "../features/cart/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const subtotal = item.price * item.quantity;

  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h4>{item.name}</h4>
        <p className="unit-price">${item.price} each</p>
        <div className="quantity-controls">
          <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
        </div>
        <button
          className="delete-btn"
          onClick={() => dispatch(removeItem(item.id))}
        >
          🗑️ Delete
        </button>
      </div>
      <div className="cart-item-subtotal">Subtotal: ${subtotal.toFixed(2)}</div>
    </div>
  );
};

export default CartItem;
