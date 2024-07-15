import React from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../data/products.json';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const product = productsData.find(p => p.id === parseInt(id));

  return (
    <div className="item-detail-container">
      {product ? (
        <>
          <img src={product.image} alt={product.name} />
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
