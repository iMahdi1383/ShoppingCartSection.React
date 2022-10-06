import React from 'react';
import Styles from './ProductList.module.css';
import Product from './Product/Product';

const ProductList = ({
  products,
  IncreaseProductQuantity,
  DecreaseProductQuantity,
  ChangeProductTitle,
}) => {
  const RenderProducts = () => {
    return (
      <div className={Styles.productList}>
        {products.map((product) => {
          return (
            <Product
              product={product}
              key={product.id}
              onIncrease={() => IncreaseProductQuantity(product.id)}
              onDecrease={() => DecreaseProductQuantity(product.id)}
              onChangeTitle={ChangeProductTitle}
            />
          );
        })}
      </div>
    );
  };

  const RenderEmptyShoppingCart = () => {
    return (
      <>
        <p>There is no products in cart. go shopping!</p>
      </>
    );
  };

  return <>{!products.length ? RenderEmptyShoppingCart() : RenderProducts()}</>;
};

export default ProductList;
