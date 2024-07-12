import React from 'react';
import products from '../data/products';

function ItemListContainer({ addToCart }) {
  return (
    <div className="item-list-container">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt={product.name} />
          <div className="card-content">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Agregar al carrito</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemListContainer;
