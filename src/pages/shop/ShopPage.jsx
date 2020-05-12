import React from 'react';
import SHOP_DATA from '../../data/shopping-data';
import PreviewCollection from '../../components/preview-collection/PreviewCollection';
const ShopPage = () => {
  console.log('shop data', SHOP_DATA);
  return (
    <div>
      {SHOP_DATA.map((item) => (
        <PreviewCollection
          key={item.id}
          title={item.title}
          items={item.items}
        />
      ))}
    </div>
  );
};

export default ShopPage;
