import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import ProductCard from './ProductCard';
import './styles.css';


function ItemListContainer() {
  const { categoryId } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (categoryId) {
      setFilteredProducts(products.filter(product => product.category === categoryId));
    } else {
      setFilteredProducts(products);
    }
  }, [categoryId]);

  return (
    <div className="product-list">
      {filteredProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ItemListContainer;
