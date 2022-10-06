import React from 'react';
import Styles from './Product.module.css';
import ProductTitle from './ProductTitle/ProductTitle';
import { HiPlus, HiOutlineTrash, HiOutlineMinus } from 'react-icons/hi';

const Product = ({product,onChangeTitle,onDecrease,onIncrease}) => {
  return (
    <div className={Styles.product}>
      <ProductTitle
        product={product}
        onChangeTitle={onChangeTitle}
      />
      <p>{product.price} $</p>
      <br />
      <div className={Styles.buttons}>
        <button
          onClick={onDecrease}
          className={`${Styles.delete} ${
            product.quantity < 2 && Styles.trash
          }`}
        >
          {product.quantity > 1 ? <HiOutlineMinus /> : <HiOutlineTrash />}
        </button>
        <span> {product.quantity} </span>
        <button onClick={onIncrease} className={Styles.increase}>
          <HiPlus />
        </button>
      </div>
    </div>
  );
};

export default Product;
