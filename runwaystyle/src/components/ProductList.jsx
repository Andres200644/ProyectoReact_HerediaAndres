import React, { useEffect, useState } from 'react';
import { db } from './FirebaseConfig';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productCollection = await db.collection('items').get();
      setProducts(productCollection.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    fetchProducts();
  }, []);

  return (
    <div className="item-list">
      {products.map(product => (
        <div key={product.id} className="item-card">
          <img src={product.imagen} alt={product.nombre} />
          <h3>{product.nombre}</h3>
          <p>{product.precio} MXN</p>
          <p>Stock: {product.stock}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
