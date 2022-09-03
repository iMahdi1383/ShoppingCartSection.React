import Styles from './ProductTitle.module.css';
import { useState } from 'react';

const ProductTitle = (props) => {
  const [inputActived, SetInputActived] = useState(false);
  const [newProductTitle, SetNewProductTitle] = useState(props.product.title);

  const ToggleShowInput = () => {
    if (inputActived) SetInputActived(false);
    else FocusOnInputProductTitle(props.product.id);
  };

  const FocusOnInputProductTitle = async (productId) => {
    await SetInputActived(true);
    const inputElement = document.getElementById(
      'inputProduct' + productId + 'Title',
    );
    inputElement.focus();
    inputElement.setSelectionRange(0, inputElement.value.length);
  };

  const SubmitChangeTitle = (id, newTitle) => {
    props.onChangeTitle(id, newTitle, () => ToggleShowInput());
  };

  const CheckErrorInputProductTitle = () => {
    if (newProductTitle === '')
    ShowErrorInputProductTitle(props.product.id, 'Enter a Title Here');
    else SubmitChangeTitle(props.product.id, newProductTitle);
  };
  const ShowErrorInputProductTitle = async (productId, message) => {
    await SetInputActived(true);
    const inputElement = document.getElementById(
      'inputProduct' + productId + 'Title',
    );
    inputElement.classList.add(Styles.error);
    inputElement.placeholder = message;
  };

  if (inputActived) {
    return (
      <input
        placeholder="Course Title"
        className={Styles.title}
        id={'inputProduct' + props.product.id + 'Title'}
        type="text"
        onChange={(e) => SetNewProductTitle(e.target.value)}
        onBlur={() => CheckErrorInputProductTitle()}
        value={newProductTitle}
      />
    );
  } else
    return <h3 onClick={() => ToggleShowInput()}>{props.product.title}</h3>;
};

export default ProductTitle;
