import Product from './Components/Product/Product';

const App = () => {
    return (
        <div className="container" id="title">
            <h1>Shopping App</h1>
            <br />
            <Product name='React' price="99 $"/>
            <Product name='Node' price="79 $"/>
            <Product name='JavaScript' price="59 $">
                <p>disscount : 15%</p>
            </Product>
        </div>
    );
};

export default App;
