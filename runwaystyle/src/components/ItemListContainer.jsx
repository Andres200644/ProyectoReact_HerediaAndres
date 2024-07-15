import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import productsData from '../data/products.json';

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (categoryId) {
      setProducts(productsData.filter(product => product.categoryId === parseInt(categoryId)));
    } else {
      setProducts(productsData);
    }
  }, [categoryId]);

  return (
    <div className="item-list-container">
      {products.map(product => (
        <div key={product.id}>
          <Link to={`/item/${product.id}`}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ItemListContainer;
