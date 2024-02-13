// npm modules
import { NavLink } from 'react-router-dom'

// assets
import styles from "./NavBar.module.css";

// css


const NavBar = ({ user, handleLogout }) => {

  const publicLinks = (
    <div className={styles.profileLink}>
      <NavLink className={styles.profileLink} to="/">home</NavLink>
      </div>
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
      <NavLink to="/auth/login">Logout</NavLink>
      {user ? protectedLinks : publicLinks}
    </nav>
  )
}

export default NavBar
