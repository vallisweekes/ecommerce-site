import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';

import BackButton from '../back-button/BackButton';

import CollectionPreview from '../collection-preview/CollectionPreview';

import './collections-overview.styles.scss';
const CollectionsOverview = ({ collections, history }) => {
  return (
    <div className="collections-overview">
      <BackButton history={history} />
      {collections.map((item) => (
        <CollectionPreview
          key={item.id}
          title={item.title}
          items={item.items}
        />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
