import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

const Item = ({ item }) => {
    return (
        <div className="item-card">
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>${item.price}</p>
            <p>Stock: {item.stock}</p>
            <Link to={`/item/${item.id}`}>Ver detalle</Link>
        </div>
    );
};

export default Item;
