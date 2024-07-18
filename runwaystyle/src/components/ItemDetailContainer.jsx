import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import './styles.css';

function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = products.find(product => product.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card">
      <img src={product.imageUrl} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)} className="add-to-cart">Agregar al Carrito</button>
    </div>
  );
}



export default ItemDetailContainer;
