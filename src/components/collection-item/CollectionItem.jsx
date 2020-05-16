import React from 'react';
import CustomButton from '../custom-button/CustomButton';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import './collection-item.styles.scss';
const CollectionItem = ({ item, addItem }) => {
  console.log('inside the collection item', item);
  const { name, price, imageUrl } = item;
  console.log(name, price, imageUrl);

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />

      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <div onClick={() => addItem(item)} className="position-fix">
        <CustomButton type="button" inverted>
          Add To Cart
        </CustomButton>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
