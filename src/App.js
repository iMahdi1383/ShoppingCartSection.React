import './App.css';
import Header from './Components/Header/Header';
import ProductList from './Components/ProductList/ProductList';

const App = () => {
  return (
    <div className="container">
      <Header title="Courses Shop"/>
      <ProductList />
    </div>
  );
};

export default App;
