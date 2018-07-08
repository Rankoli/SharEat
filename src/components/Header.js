import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import BurgerMenu from './BurgerMenu';






export const Header = ({ startLogout }) => (


  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <BurgerMenu></BurgerMenu>
      </div>
    </div>
  </header>
);



export default Header;

