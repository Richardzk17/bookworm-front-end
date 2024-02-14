// css 
import styles from './ProfileCard.module.css'

const ProfileCard = ({ profile }) => {

  return ( 
    <div className={styles.container}>
      <h2 className={styles.profile}>{profile.name}</h2>
    </div>
  )
}

export default ProfileCard