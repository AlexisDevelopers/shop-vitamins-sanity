import React from 'react';
import { useState } from 'react';
import '../styles/Menu.css';

const Menu = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='navbar'>
        <a href="/carrito" className='nav-logo'>Carrito</a>
        <div className={`nav-items ${isOpen && "open"}`}>
            <a href="/login">Login</a>
            <a href="/register">Register</a>
        </div>
        <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
            <div className='bar'></div>
        </div>
    </div>
  )
}

export default Menu