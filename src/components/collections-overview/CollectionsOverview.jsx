import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';

import CollectionPreview from '../collection-preview/CollectionPreview';
import './collections-overview.styles.scss';
const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
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
