import { useState } from 'react';
import Product from './Components/Product/Product';

const App = () => {
  const [products, setProducts] = useState([
    { id:'1', name: 'Udemy JS', price: '350' },
    { id:'2', name: 'Udemy HTML', price: '270' },
    { id:'3', name: 'Udemy React', price: '890' },
  ]);
  const RefreshPrices = () => {
    setProducts(
      (prevProducts) => {
        return(
          prevProducts.map(
            (product) => {
              return ({ ...product, price: Math.floor(Math.random() * 1000) });
            }
          )
        )
      }
    );
  };
  return (
    <div>
      <h1>Courses Shop</h1>
      <hr />
      <br />
      {
        // Show Products
        products.map((product) => {
          return <Product name={product.name} price={product.price + ',000 T'} key={product.id}/>;
        })
      }
      <button onClick={RefreshPrices}> Refresh Prices</button>
    </div>
  );
};

export default App;
