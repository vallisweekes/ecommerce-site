import React from 'react';
import { connect } from 'react-redux';

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from '../../redux/cart/cart.actions';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import './checkout-item.styles.scss';
const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="minus" onClick={() => removeItem(cartItem)}>
          <span role="img" aria-label="minus">
            &#10134;
          </span>
        </div>
        <span className="value">{quantity}</span>
        <div className="plus" role="img" onClick={() => addItem(cartItem)}>
          <span role="img" aria-label="plus">
            &#10133;
          </span>
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove" onClick={() => clearItem(cartItem)}>
        <DeleteForeverOutlinedIcon />
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
