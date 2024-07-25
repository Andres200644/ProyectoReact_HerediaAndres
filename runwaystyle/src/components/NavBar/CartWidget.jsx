import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './styles.css';

const CartWidget = ({ count }) => {
    return (
        <div className="cart-widget">
            <FaShoppingCart className="cart-icon" />
            <span>{count}</span>
        </div>
    );
};

export default CartWidget;
