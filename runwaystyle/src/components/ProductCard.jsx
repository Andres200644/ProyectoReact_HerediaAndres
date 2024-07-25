import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './styles.css';

const ProductCard = ({ product }) => {
    const { addToCart } = useContext(CartContext);

    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <p>Stock: {product.stock}</p>
            <button className="button" onClick={() => addToCart(product)}>Agregar al Carrito</button>
            <Link to={`/item/${product.id}`}>Ver Detalles</Link>
        </div>
    );
};

export default ProductCard;
