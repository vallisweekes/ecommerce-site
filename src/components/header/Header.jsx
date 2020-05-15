import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import Pos from '../pos-component/Pos';
import CartIcon from '../card-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import './header.styles.scss';

// import Pos from '../pos-component/Pos';

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header-ad">
      <div className="header">
        <Link to="/">
          <div className="logo">
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
          <CartIcon />
        </div>
        {hidden ? null : <CartDropdown />}
      </div>
      <Pos />
    </div>
  );
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
