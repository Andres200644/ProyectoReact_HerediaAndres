import React from 'react';
import './styles.css';

const ItemListContainer = ({ greeting }) => {
    return (
        <div className="container mt-5 item-list-container">
            <div className="row">
                <div className="col text-center">
                    <h2>{greeting}</h2>
                </div>
            </div>
        </div>
    );
}

export default ItemListContainer;