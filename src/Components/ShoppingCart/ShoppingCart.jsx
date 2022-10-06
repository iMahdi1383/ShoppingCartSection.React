import React from 'react';
import Styles from './ShoppingCart.module.css';
import Header from './Header/Header';
import ProductList from './ProductList/ProductList';

const ShoppingCart = ({
  products,
  IncreaseProductQuantity,
  DecreaseProductQuantity,
  ChangeProductTitle,
}) => {
  return (
    <div className={Styles.box}>
      <Header title="Shopping Cart" />
      <ProductList
        products={products}
        IncreaseProductQuantity={IncreaseProductQuantity}
        DecreaseProductQuantity={DecreaseProductQuantity}
        ChangeProductTitle={ChangeProductTitle}
      />
    </div>
  );
};

export default ShoppingCart;
