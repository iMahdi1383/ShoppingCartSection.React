import Styles from './Product.module.css';
import ProductTitle from './ProductTitle/ProductTitle';
import IcoPlus from '../../Icon/IcoPlus';
import RemoveIcon from './RemoveIcon';

const Product = (props) => {

  const WhichRemoveIcon = (quantity) => {
    if (quantity > 1) return 'minus';
    else return 'trash';
  };

  return (
    <div className={Styles.product}>
      <ProductTitle
        product={props.product}
        onChangeTitle={props.onChangeTitle}
      />
      <p>{props.product.price} $</p>
      <br />
      <div className={Styles.buttons}>
        <button onClick={props.onDecrease} className={Styles.delete}>
          <RemoveIcon icon={WhichRemoveIcon(props.product.quantity)} />
        </button>
        <span> {props.product.quantity} </span>
        <button onClick={props.onIncrease} className={Styles.increase}>
          <IcoPlus stroke={'#b3b395'} fill={'rgba(255,255,255,0.1)'} />
        </button>
      </div>
    </div>
  );
};

export default Product;
