const Product = (props) => {
    return (
        <div>
            <h6>Product Name : {props.name}</h6>
            <p>Product price : {props.price}</p>
            {props.children}
            <br />
        </div>
    );
};

export default Product;
