import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return <p>Producto no encontrado</p>;
    }

    return (
        <div className="item-detail-container">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <p>Stock: {product.stock}</p>
        </div>
    );
};

export default ItemDetailContainer;
