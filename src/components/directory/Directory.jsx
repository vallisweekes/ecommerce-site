import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import MenuItem from '../menu-item/MenuItem';
import { selectDirectorySection } from '../../redux/directory/directory.selector';

import './directory.styles.scss';
const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map((section) => (
      <MenuItem
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
