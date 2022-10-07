import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineShopping, AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

import { Cart } from "./";
import { useStateContext } from "../context/StateContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">LaVelle Vitamin Shop</Link>
      </p>

      <div className="main-navbar">
        <div className={`right-navbar ${isOpen && "open"}`}>
          {/* <Link href="/register"> */}
          <div className="menuItem-navbar">REGISTER</div>
          {/* </Link> */}
          <div className="menuItem-navbar">SIGN IN</div>
        </div>

        <button
            type="button"
            className="cart-icon"
            onClick={() => setShowCart(true)}
          >
            {/* <AiOutlineShopping /> */}
            <AiOutlineShoppingCart />
            <span className="cart-item-qty">{totalQuantities}</span>
          </button>
          {showCart && <Cart />}

        <button className={`hamburger ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
          <GiHamburgerMenu size='20px' />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
