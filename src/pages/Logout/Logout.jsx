import { Link, useNavigate } from 'react-router-dom'



import styles from './Logout.module.css'

const Logout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>You are Logged Out</h1>
        <p className={styles.text}>Thank you for using Bookworm</p>
        <Link className={styles.signIn} to="/auth/login">Sign in</Link>
      </div>
    </div>
  )
}

export default Logout