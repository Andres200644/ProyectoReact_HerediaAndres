import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';

function ItemDetailContainer({ addToCart }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="item-detail-container">
      <img src={product.image} alt={product.name} />
      <div className="item-detail-content">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <button onClick={() => addToCart(product)}>Agregar al carrito</button>
      </div>
    </div>
  );
}

export default ItemDetailContainer;
