import React from 'react';
import Styles from './ShoppingCart.module.css';
import Header from './Header/Header';
import ProductList from './ProductList/ProductList';

const ShoppingCart = (props) => {
  return (
    <div className={Styles.box}>
      <Header title="Shopping Cart" />
      <ProductList
        products={props.products}
        IncreaseProductQuantity={props.IncreaseProductQuantity}
        DecreaseProductQuantity={props.DecreaseProductQuantity}
        ChangeProductTitle={props.ChangeProductTitle}
      />
    </div>
  );
};

export default ShoppingCart;
