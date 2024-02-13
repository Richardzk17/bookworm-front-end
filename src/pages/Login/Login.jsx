// npm modules
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// services
import * as authService from '../../services/authService'

// css
import styles from './Login.module.css'

const LoginPage = ({ handleAuthEvt }) => {
  const navigate = useNavigate()

  const [message, setMessage] = useState('')
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = evt => {
    setMessage('')
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      if (!import.meta.env.VITE_BACK_END_SERVER_URL) {
        throw new Error('No VITE_BACK_END_SERVER_URL in front-end .env')
      }
      await authService.login(formData)
      handleAuthEvt()
      navigate('/')
    } catch (err) {
      console.log(err)
      setMessage(err.message)
    }
  }

  const { email, password } = formData

  const isFormInvalid = () => {
    return !(email && password)
  }

  return (
    <div className={styles.container}>
      <div className={styles.imgContent}></div>
      <main className={styles.SignInContent}>
        <h1>Access your account</h1>
        <p className={styles.message}>
          Thinking of joining us?{" "}
          <Link className={styles.signin} to="/auth/signup">
            Sign up
          </Link>
        </p>
  
        <form autoComplete="off" onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.label}>
            <input
              type="text"
              value={email}
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className={styles.input}
            />
          </label>
          <label className={styles.label}>
            <input
              type="password"
              value={password}
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className={styles.input}
            />
          </label>
          <div>
            {/* <Link to="/">Cancel</Link> */}
            <button className={styles.button} disabled={isFormInvalid()}>
              Log In
            </button>
          </div>
        </form>
      </main>
    </div>
  );
  
}

export default LoginPage
