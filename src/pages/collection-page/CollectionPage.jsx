import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selector';

import CollectionItem from '../../components/collection-item/CollectionItem';

import './collection.styles.scss';
import BackButton from '../../components/back-button/BackButton';
const CollectionPage = ({ collection, history }) => {
  // console.log(match);

  const { title, items } = collection;

  return (
    <div className="collection-page">
      <BackButton history={history} />
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProp = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});
export default connect(mapStateToProp)(CollectionPage);
