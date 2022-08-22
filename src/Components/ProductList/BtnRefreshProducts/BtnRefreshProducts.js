import Styles from './BtnRefreshProducts.module.css';

const BtnRefreshProducts = (props) => {
  return <button onClick={props.click} className={Styles.btnRefreshProducts}>{props.title}</button>;
};

export default BtnRefreshProducts;
