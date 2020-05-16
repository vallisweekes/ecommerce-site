import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import MenueItem from '../menu-item/MenueItem';
import { selectDirectorySection } from '../../redux/directory/directory.selector';

import './directory.styles.scss';
const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map((section) => (
      <MenueItem
        key={section.id}
        title={section.title}
        imageUrl={section.imageUrl}
        size={section.size}
        linkUrl={section.linkUrl}
      />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection,
});

export default connect(mapStateToProps)(Directory);
