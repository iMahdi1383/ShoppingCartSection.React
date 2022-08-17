import Styles from './Product.module.css';

const Product = (props) => {
  return (
    <div className={Styles.product} onClick={props.click}>
      <h3>Product Name : {props.name}</h3>
      <p>Product price : {props.price}</p>
      {props.children}
    </div>
  );
};

export default Product;
