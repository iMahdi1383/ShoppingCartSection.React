import Product from './Components/Product/Product';
const App = () => {
    return (
        <div className="container" id="title">
            <h1>Shopping App</h1>
            <Product />
            <Product />
            <Product />
        </div>
    );
};

export default App;
