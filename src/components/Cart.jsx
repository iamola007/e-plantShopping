import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  selectCartItems,
  selectTotalItems,
  selectTotalPrice,
} from "../features/cart/cartSlice";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const totalItems = useSelector(selectTotalItems);
  const totalPrice = useSelector(selectTotalPrice);

  const handleCheckout = () => {
    alert(
      "Coming Soon! Checkout functionality will be available in the next update.",
    );
  };

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
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="cart-summary">
        <p>
          Total Plants: <strong>{totalItems}</strong>
        </p>
        <p>
          Total Cost: <strong>${totalPrice.toFixed(2)}</strong>
        </p>
        <div className="cart-buttons">
          <Link to="/plants">
            <button className="continue-shopping-btn">Continue Shopping</button>
          </Link>
          <button className="checkout-btn" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
