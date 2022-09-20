import React from 'react';
import Styles from './Product.module.css';
import ProductTitle from './ProductTitle/ProductTitle';
import { HiPlus, HiOutlineTrash, HiOutlineMinus } from 'react-icons/hi';

const Product = (props) => {
  return (
    <div className={Styles.product}>
      <ProductTitle
        product={props.product}
        onChangeTitle={props.onChangeTitle}
      />
      <p>{props.product.price} $</p>
      <br />
      <div className={Styles.buttons}>
        <button
          onClick={props.onDecrease}
          className={`${Styles.delete} ${
            props.product.quantity < 2 && Styles.trash
          }`}
        >
          {props.product.quantity > 1 ? <HiOutlineMinus /> : <HiOutlineTrash />}
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
