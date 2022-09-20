import React from 'react';

const ShoppingCart = () => {
  return (
    <div className="container">
      <div className="box">
        <Header title="Shopping Cart" />
        <ProductList />
      </div>
    </div>
  );
};

export default ShoppingCart;
