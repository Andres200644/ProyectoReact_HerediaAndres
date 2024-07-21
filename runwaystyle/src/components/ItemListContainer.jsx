import React from 'react';
import ProductCard from '../components/ProductCard';
import products from '../../src/data/products';
import './styles.css';

const ItemListContainer = () => {
  return (
    <div className="item-list-container">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemListContainer;
