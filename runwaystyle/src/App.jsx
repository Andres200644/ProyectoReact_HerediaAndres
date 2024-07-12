import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div className="app">
      <NavBar cart={cart} />
      <Switch>
        <Route path="/" exact>
          <ItemListContainer addToCart={addToCart} />
        </Route>
        <Route path="/category/:categoryId">
          <ItemListContainer addToCart={addToCart} />
        </Route>
        <Route path="/item/:id">
          <ItemDetailContainer addToCart={addToCart} />
        </Route>
        <Route path="/cart">
          <Cart cart={cart} removeFromCart={removeFromCart} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
