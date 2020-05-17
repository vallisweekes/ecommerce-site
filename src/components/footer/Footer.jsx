import React from 'react';

import SocialIcons from '../social-icons/SocialIcons';
import './footer.styles.scss';
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-inner">
        <div className="disclaimer">
          <p>Designed By: Vallis Weekes &copy; {new Date().getFullYear()}</p>
        </div>
        <div className="social">
          <SocialIcons />
        </div>
      </div>
    </div>
  );
};

export default Footer;
