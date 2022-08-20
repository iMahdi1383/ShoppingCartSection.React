import { Fragment } from 'react';

const Product = (props) => {
  return (
    /*
    ? Fragment :
    A JSX tag that shows content without a parrent <div> element.
    * We Can Use <></> instead of <Fragment></Fragment>
    */
    <Fragment>
      <h3>Product Name : {props.name}</h3>
      <p>Product price : {props.price}</p>
      {props.children}
    </Fragment>
  );
};

export default Product;
