import { useState } from 'react';
import Styles from './ProductList.module.css';
import Product from './Product/Product';

const ProductList = () => {
  const [products, setProducts] = useState([
    { id: '1', title: 'Java Script', price: '350', quantity: 3 },
    { id: '2', title: 'HTML', price: '270', quantity: 2 },
    { id: '3', title: 'React', price: '890', quantity: 5 },
    { id: '4', title: 'Node.js', price: '950', quantity: 1 },
  ]);

  const DeleteProduct = (id) => {
    const filteredArray = products.filter((product) => product.id !== id);
    setProducts(filteredArray);
  };
  const IncreaseProductQuantity = (id) => {
    const copyOfProducts = [...products];
    const selectedProduct = copyOfProducts.find((product) => product.id === id);
    selectedProduct.quantity++;
    setProducts(() => copyOfProducts);
  };
  const DecreaseProductQuantity = (id) => {
    const copyOfProducts = [...products];
    const selectedProduct = copyOfProducts.find((product) => product.id === id);
    selectedProduct.quantity--;
    setProducts(() => copyOfProducts);
    if (selectedProduct.quantity === 0) DeleteProduct(id);
  };
  const ChangeProductTitle = (id, newTitle, HideInputAndShowProductName) => {
    const copyOfProducts = [...products];
    const selectedProduct = copyOfProducts.find((product) => product.id === id);
    selectedProduct.title = newTitle;
    setProducts(() => copyOfProducts);
    HideInputAndShowProductName();
  };

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
  }

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
