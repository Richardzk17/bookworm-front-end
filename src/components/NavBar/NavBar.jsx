// npm modules
import { NavLink } from 'react-router-dom'

import styles from "./NavBar.module.css";


// assets
// import logo from '../assets/branding/logo.svg'

// css


const NavBar = ({ user, handleLogout }) => {

  const publicLinks = (
    <ul>
      <li><NavLink to="/auth/login">LOG IN</NavLink></li>
      <li><NavLink to="/auth/signup">SIGN UP</NavLink></li>
    </ul>
  )

  const protectedLinks = (
    <ul>
      <li>
        <NavLink to="/auth/logout" onClick={handleLogout}>LOG OUT</NavLink>
      </li>
    </ul>
  )

  return (
    <nav className={styles.container}>
      <NavLink to="/">Logout</NavLink>
      {user ? protectedLinks : publicLinks}
    </nav>
  )
}

export default NavBar
