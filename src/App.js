import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import ProductList from './Components/ProductList/ProductList';

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
