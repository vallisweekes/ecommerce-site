import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = ({ currentUser }) => {
  return (
    <div className="header">
      <Link to="/">
        <div>
          <img
            style={{ width: 90 }}
            src="https://www.vallisweekes.com/portfolio_assets/voowoo-trans-bg.png"
            alt="logo"
          />
        </div>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
