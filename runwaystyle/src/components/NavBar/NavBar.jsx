import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import { CartContext } from '../../context/CartContext';
import './styles.css';

const NavBar = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
                    <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
                </svg></Link>
            </div>
            <div className="navbar-links">
                <Link to="/category/consolas">Consolas</Link>
                <Link to="/category/juegos">Juegos</Link>
                <Link to="/category/accesorios">Accesorios</Link>
            </div>
            <div className="navbar-cart">
                <CartWidget count={cartItems.length} />
            </div>
        </nav>
    );
};

export default NavBar;
