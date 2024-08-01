import React from 'react';
import { useCart } from '../context/CartContext';
import '../styles/styles.css';

const ItemDetail = ({ item }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(item);
  };

  return (
    <div className="item-detail">
      <img src={item.image} alt={item.name} />
      <div className="item-detail-info">
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <p><strong>${item.price}</strong></p>
        <p><strong>Stock: {item.stock}</strong></p>
        <button onClick={handleAddToCart}>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ItemDetail;
