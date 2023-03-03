import { NavLink } from 'react-router-dom';
import React from 'react';
import styles from '../styles/Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.nav}>
      <h1>Math Magicians</h1>
      <NavLink to="/" activeClassName={styles.activeLink}>Home</NavLink>
      <NavLink to="/Calculator" activeClassName={styles.activeLink}>Calculator</NavLink>
      <NavLink to="/Quote" activeClassName={styles.activeLink}>Quote</NavLink>
    </nav>

  );
}

export default Navbar;
