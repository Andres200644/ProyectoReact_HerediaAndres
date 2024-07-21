import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../src/context/CarContext';
import './App.css';

const ProductCard = ({ product }) => {
  const { addItem } = useContext(CartContext);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={() => addItem(product, 1)}>Agregar al Carrito</button>
      <Link to={`/item/${product.id}`}>Ver detalles</Link>
    </div>
  );
};

export default ProductCard;
