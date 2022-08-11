import { Component, useState } from 'react';
import Product from './Components/Product/Product';

// class App extends Component {
//   state = {
//     products: [
//       { name: 'Udemy JS', price: '350' },
//       { name: 'Udemy HTML', price: '270' },
//       { name: 'Udemy React', price: '890' },
//     ],
//   };
//   RefreshPrices = () => {
//     this.setState({
//       products: [
//         { name: 'Udemy JS', price: Math.floor(Math.random() * 1000) },
//         { name: 'Udemy HTML', price: Math.floor(Math.random() * 1000) },
//         { name: 'Udemy React', price: Math.floor(Math.random() * 1000) },
//       ],
//     });
//   };
//   render() {
//     return (
//       <div>
//         <h1> Courses Shop </h1>
//         <hr />
//         <br />
//         {
//           /* Show Products */
//           this.state.products.map((product) => {
//             return (
//               <Product name={product.name} price={product.price + ',000 T'} />
//             );
//           })
//         }
//         <button onClick={this.RefreshPrices}>Refresh Prices</button>
//       </div>
//     );
//   }
// }

const App = () => {
  const [products, setProducts] = useState([
    { name: 'Udemy JS', price: '350' },
    { name: 'Udemy HTML', price: '270' },
    { name: 'Udemy React', price: '890' },
  ]);
  const RefreshPrices = () => {
    setProducts([
      { name: 'Udemy JS', price: Math.floor(Math.random() * 1000) },
      { name: 'Udemy HTML', price: Math.floor(Math.random() * 1000) },
      { name: 'Udemy React', price: Math.floor(Math.random() * 1000) },
    ]);
  };
  return (
    <div>
      <h1>Courses Shop</h1>
      <hr />
      <br />
      {
        // Show Products
        products.map((product) => {
          return <Product name={product.name} price={product.price + ',000 T'} />;
        })
      }
      <button onClick={RefreshPrices}> Refresh Prices</button>
    </div>
  );
};

export default App;
