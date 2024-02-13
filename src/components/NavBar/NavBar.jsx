// npm modules
import { NavLink } from 'react-router-dom'

// assets
import styles from "./NavBar.module.css";

// css


const NavBar = ({ user, handleLogout }) => {

  const publicLinks = (
    <ul>
      <li><NavLink to='/about'>About</NavLink></li>
      <li><NavLink to='/library'>Library</NavLink></li>
      <li><NavLink to='/'>Login/Sign up</NavLink></li>
    </ul>
  )

  const protectedLinks = (
    <ul>
      <li><NavLink to='/about'>About</NavLink></li>
      <li><NavLink to='/search'>Search</NavLink></li>
      <li><NavLink to='/library'>Library</NavLink></li>
      <li><NavLink to='/profiles'>Profiles</NavLink></li>  
      <li><NavLink to='/profile'>My Profile</NavLink></li>    
      <li><NavLink to="/auth/logout" onClick={handleLogout}>LOG OUT</NavLink></li>

    </ul>
  )

  return (
    <nav className={styles.container}>
      {user ? protectedLinks : publicLinks}
    </nav>
  )
}

export default NavBar
