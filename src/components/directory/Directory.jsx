import React from 'react';
import MenueItem from '../menu-item/MenueItem';
import sections from '../../data/directory-data';
import './directory.styles.scss';
const Directory = () => {
  //   const [section, setSection] = useState([]);

  console.log('data', sections);
  return (
    <div className="directory-menu">
      {sections.map((section) => (
        <MenueItem
          key={section.id}
          title={section.title}
          imageUrl={section.imageUrl}
          size={section.size}
        />
      ))}
    </div>
  );
};

export default Directory;
