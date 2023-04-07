import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { BiShoppingBag } from "react-icons/bi";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <header>
      <nav className="container">
        <span className="logo">WebStore</span>
        <div className="navlinks">
          <Link className="navLink" to="/">
            Home
          </Link>
          <Link to="/cart" className="cartCount">
            <BiShoppingBag className="icon" />
            <span>{items.length}</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
