import { Component } from 'react';
import './App.css';
import Product from './Components/Product/Product';

class App extends Component {
  constructor(props) {
    super(props);
    /*
    ? How does bind() work? :
    #1- Copy this.RefreshPrices()
    #2- Replace 'this' keyword in the copied function.
    #3- returns new function with 'this'
    then assign (=) it to old function.
    * Also we can use this in class, instead of using 'bind()' method in constructor :
    * RefreshPrices = () => {}
    */
    this.RefreshPrices = this.RefreshPrices.bind(this);
  }
  state = {
    products: [
      { id: '1', name: 'Udemy JS', price: '350' },
      { id: '2', name: 'Udemy HTML', price: '270' },
      { id: '3', name: 'Udemy React', price: '890' },
    ],
  };

  RefreshPrices() {
    console.log('App.RefreshPrices().this : ', this);
    /*
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
    */
  }

  render() {
    return (
      <div className="container">
        <h1> Courses Shop </h1>
        <hr />
        {
          /* Show Products */
          this.state.products.map((product) => {
            return (
              <Product
                name={product.name}
                price={product.price + ',000 T'}
                key={product.id}
              />
            );
          })
        }
        <button onClick={this.RefreshPrices}>Refresh Prices</button>
      </div>
    );
  }
}

export default App;
