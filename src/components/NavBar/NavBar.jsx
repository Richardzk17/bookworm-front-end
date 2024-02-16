// npm modules
import { NavLink } from 'react-router-dom'

// assets
import styles from "./NavBar.module.css";

// css


const NavBar = ({ user, handleLogout }) => {

  const publicLinks = (
    <ul>
      {/* <li><NavLink to='/about'>About</NavLink></li> */}
      <li><NavLink to='/library'>Library</NavLink></li>
      <li><NavLink to='/auth/login'>Login/Sign up</NavLink></li>
    </ul>
  )

  const protectedLinks = (
    <ul>
      {/* <li><NavLink to='/about'>About</NavLink></li> */}
      {/* ^ did not get to finish, due to having to add reminaing functionality for MVP -Bri */}
      <li><NavLink to='/search'>Search</NavLink></li>
      <li><NavLink to='/library'>Library</NavLink></li>
      {/* <li><NavLink to='/profiles'>Profiles</NavLink></li>   */} 
      {/* ^ broken code, routes don't link */}
      <li><NavLink to='/profile'>My Profile</NavLink></li>    
      <li><NavLink to="/auth/logout" onClick={handleLogout}>Log Out</NavLink></li>
    </ul>
  )

  return (
    <nav className={styles.container}>
      {user ? protectedLinks : publicLinks}
    </nav>
  )
}

export default NavBar
