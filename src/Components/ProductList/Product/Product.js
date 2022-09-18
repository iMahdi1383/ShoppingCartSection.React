import React from 'react';
import Styles from './Product.module.css';
import ProductTitle from './ProductTitle/ProductTitle';
import { HiPlus } from 'react-icons/hi';
import RemoveIcon from './RemoveIcon';

const Product = (props) => {
  const WhichRemoveIcon = (quantity) => {
    if (quantity > 1) return 'minus';
    else return 'trash';
  };

  return (
    <div className={Styles.product}>
      <ProductTitle
        product={props.product}
        onChangeTitle={props.onChangeTitle}
      />
      <p>{props.product.price} $</p>
      <br />
      <div className={Styles.buttons}>
        <button onClick={props.onDecrease} className={Styles.delete}>
          <RemoveIcon icon={WhichRemoveIcon(props.product.quantity)} />
        </button>
        <span> {props.product.quantity} </span>
        <button onClick={props.onIncrease} className={Styles.increase}>
          <HiPlus />
        </button>
      </div>
    </div>
  );
};

export default Product;
