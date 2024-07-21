import React, { useContext } from 'react';
import { CartContext } from '../../context/CarContext';
import '../../App.css';

const Cart = () => {
  const { cart, removeItem, clearCart, totalPrice } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h2>Mi carrito</h2>
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} />
            <div>
              <h4>{item.title}</h4>
              <p>Cantidad: {item.quantity} Precio: ${item.price}</p>
            </div>
            <button onClick={() => removeItem(item.id)}>🗑️</button>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h3>Total: ${totalPrice()}</h3>
        <button onClick={() => clearCart()}>Vaciar carrito</button>
        <button>Proceder al pago</button>
      </div>
    </div>
  );
};

export default Cart;
