import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CartProvider from './assets/context/CartContext';
import './App.css';


ReactDOM.render(
  <CartProvider>
    <App />
  </CartProvider>,
  document.getElementById('root')
);
