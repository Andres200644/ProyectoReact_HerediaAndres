import React from 'react';
import { Link } from 'react-router-dom';
import '../../src/App.css';


function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p className='price'>${product.price}</p>
      <Link className='details-link' to={`/item/${product.id}`}>Ver Detalles</Link>
    </div>
  );
}

export default ProductCard;
