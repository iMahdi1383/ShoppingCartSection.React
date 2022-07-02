import { Component } from 'react';
import Product from './Components/Product/Product';

class App extends Component {
    state = {
        Product: [
            { name: 'React', price: '99' },
            { name: 'Node', price: '79' },
            { name: 'JavaScript', price: '59' },
        ],
    };
    render() {
        return (
            <div>
                <h1> Courses Shop </h1>
                <br />

                {this.state.Product.map((Product) => {
                    return (
                        <Product
                            name={Product.name}
                            price={Product.price + '$'}
                        />
                    );
                })}
            </div>
        );
    }
}

export default App;
