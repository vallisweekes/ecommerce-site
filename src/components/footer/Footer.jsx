import React from 'react';
import './footer.styles.scss';
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-inner">
        <div className="disclaimer">
          <p>Designed By: Vallis Weekes {new Date().getFullYear()}</p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
