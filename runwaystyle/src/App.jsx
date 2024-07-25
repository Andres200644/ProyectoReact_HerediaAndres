import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from './components/Footer';
import CartProvider from './context/CartContext';
import './App.css';

function App() {
    return (
        <CartProvider>
            <Router>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={ItemListContainer} />
                    <Route path="/category/:id" component={ItemListContainer} />
                    <Route path="/item/:id" component={ItemDetailContainer} />
                </Switch>
                <Footer />
            </Router>
        </CartProvider>
    );
}

export default App;
