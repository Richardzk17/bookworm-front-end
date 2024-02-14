// components
import ProfileCard from '../../components/ProfileCard/ProfileCard'
// css
import styles from './Profiles.module.css'

const Profiles = (props) => {
  
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>All Bookworm Profile Users</h1>
        <div>
          {Profiles.map}
        </div>
      </div>
    </div>
  )
}

export default Profiles
