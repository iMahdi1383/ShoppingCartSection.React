const Product = (props) => {
    return (
        <div>
                            <h3>Product Name : {props.name}</h3>
                            <p>Product price : {props.price}</p>
                            {props.children}
                            <br />
        </div>
    );
};

export default Product;
