import { useState } from 'react';
import Product from './Product/Product';
import BtnRefreshProducts from './BtnRefreshProducts/BtnRefreshProducts';

const ProductList = () => {
  const [products, setProducts] = useState([
    { id: '1', name: 'Udemy JS', price: '350' },
    { id: '2', name: 'Udemy HTML', price: '270' },
    { id: '3', name: 'Udemy React', price: '890' },
  ]);
  const RefreshPrices = () => {
    setProducts((prevProducts) => {
      return prevProducts.map((product) => {
        return { ...product, price: Math.floor(Math.random() * 1000) };
      });
    });
  };
  return (
    <>
      {products.map((product) => {
        return (
          <Product
            name={product.name}
            price={product.price + ',000 T'}
            key={product.id}
          />
        );
      })}
      <BtnRefreshProducts
        title={'Refresh Prices'}
        click={() => RefreshPrices()}
      />
    </>
  );
};

export default ProductList;
