import React from 'react';
import './App.css';
import Header from './Components/ShoppingCart/Header/Header';
import ProductList from './Components/ShoppingCart/ProductList/ProductList';

const App = () => {
  return (
    <div className="container">
      <div className="box">
        <Header title="Shopping Cart" />
        <ProductList />
      </div>
    </div>
  );
};

export default App;
