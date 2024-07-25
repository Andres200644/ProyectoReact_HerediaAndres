import React from 'react';
import products from '../data/products';
import ProductCard from './ProductCard';

const ItemListContainer = ({ match }) => {
    const categoryId = match.params.id;
    const filteredProducts = categoryId ? products.filter(product => product.category === categoryId) : products;

    return (
        <div className="item-list-container">
            {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ItemListContainer;
