import { Component } from 'react';
import Product from './Components/Product/Product';

class App extends Component {
  state = {
    products: [
      { id:'1', name: 'Udemy JS', price: '350' },
      { id:'2', name: 'Udemy HTML', price: '270' },
      { id:'3', name: 'Udemy React', price: '890' },
    ],
  };

  RefreshPrices = () => {
    this.setState(
      (prevState) => {
        return ({
          products:
            prevState.products.map(
              (product) => {
                return ({ ...product, price: Math.floor(Math.random() * 1000) });
              }
            )
          ,
        });
      }
    );
    /*
    this.setState({
      products: [
        { name: 'Udemy JS', price: Math.floor(Math.random() * 1000) },
        { name: 'Udemy HTML', price: Math.floor(Math.random() * 1000) },
        { name: 'Udemy React', price: Math.floor(Math.random() * 1000) },
      ],
    });
    */
  };

  render() {
    return (
      <div>
        <h1> Courses Shop </h1>
        <hr />
        <br />
        {
        /* Show Products */
          this.state.products.map((product) => {
            return (
              <Product name={product.name} price={product.price + ',000 T'} key={product.id}/>
            );
          })
        }
        <button onClick={this.RefreshPrices}>Refresh Prices</button>
      </div>
    );
  }
}

export default App;
