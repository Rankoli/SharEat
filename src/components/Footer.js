import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import BurgerMenu from './BurgerMenu';






export const Footer = ({ startLogout }) => (


  <header className="footer">
    <div className="content-container">
      <div className="footer__content">
        <Link className="footer__title" to="/dashboard">
          <h1>SharEat</h1>
        </Link>
        <button className="button button--link" onClick={startLogout}>Logout</button>

      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Footer);

