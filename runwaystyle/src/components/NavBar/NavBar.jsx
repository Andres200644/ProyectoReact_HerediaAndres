import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './styles.css';

function NavBar() {
  const { cart } = useCart();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Inicio</Link>
      </div>
      <div className="navbar-links">
        <Link to="/category/camisetas">Camisetas</Link>
        <Link to="/category/pantalones">Pantalones</Link>
        <Link to="/category/zapatillas">Zapatillas</Link>
      </div>
      <div className="navbar-cart">
        <Link to="/cart">Cart ({cart.length})</Link>
      </div>
    </nav>
  );
}

export default NavBar;
