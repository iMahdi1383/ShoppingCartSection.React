import React from 'react';
import Styles from './Navbar.module.css';
import { HiOutlineShoppingCart } from 'react-icons/hi';

const NavBar = ({products}) => {
  return (
    <div className={Styles.navbar}>
      <div className={Styles.container}>
        <button className={Styles.btnIco}>
          {products.length > 0 && (
            <span className={Styles.badge}>{products.length}</span>
          )}
          <HiOutlineShoppingCart />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
