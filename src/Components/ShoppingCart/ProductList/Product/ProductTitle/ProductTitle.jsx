import Styles from './ProductTitle.module.css';
import React, { useState } from 'react';

const ProductTitle = ({product,onChangeTitle}) => {
  const [inputActived, SetInputActived] = useState(false);
  const [newProductTitle, SetNewProductTitle] = useState(product.title);

  const ToggleShowInput = () => {
    if (inputActived) SetInputActived(false);
    else FocusOnInputProductTitle(product.id);
  };

  const FocusOnInputProductTitle = async (productId) => {
    await SetInputActived(true);
    const inputElement = document.getElementById(
      `inputProduct ${product.id} Title`,
    );
    inputElement.focus();
    inputElement.setSelectionRange(0, inputElement.value.length);
  };

  const SubmitChangeTitle = (id, newTitle) => {
    onChangeTitle(id, newTitle, () => ToggleShowInput());
  };

  const CheckErrorInputProductTitle = () => {
    if (newProductTitle === '')
      ShowErrorInputProductTitle(product.id, 'Enter a Title Here');
    else SubmitChangeTitle(product.id, newProductTitle);
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
        id={`inputProduct ${product.id} Title`}
        type="text"
        onChange={(e) => SetNewProductTitle(e.target.value)}
        onBlur={() => CheckErrorInputProductTitle()}
        value={newProductTitle}
      />
    );
  } else
    return <h3 onClick={() => ToggleShowInput()}>{product.title}</h3>;
};

export default ProductTitle;
