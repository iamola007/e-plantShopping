import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { selectTotalItems } from "../features/cart/cartSlice";
import cartIcon from "../assets/cart-icon.svg"; // optional – you can use an emoji or FontAwesome

const Header = () => {
  const totalItems = useSelector(selectTotalItems);
  const location = useLocation();

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <span className="logo-icon">🌿</span>
          <span className="logo-text">Paradise Nursery</span>
        </Link>
      </div>
      <div className="tagline">Bringing Nature Indoors</div>
      <nav className="nav-links">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Home
        </Link>
        <Link
          to="/plants"
          className={location.pathname === "/plants" ? "active" : ""}
        >
          Plants
        </Link>
        <Link
          to="/cart"
          className={location.pathname === "/cart" ? "active" : ""}
        >
          Cart
        </Link>
      </nav>
      <div className="cart-icon">
        <Link to="/cart">
          🛒 <span className="cart-count">{totalItems}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
