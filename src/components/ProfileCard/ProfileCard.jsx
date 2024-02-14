// css 
import styles from './ProfileCard.module.css'

const ProfileCard = ({ profile }) => {

  return ( 
    <div className={styles.container}>
      <h2 className={styles.profile}>{profile.name}</h2>
      <img className={styles.profilePic} src={profile.photo} alt="" />
    </div>
  )
}

export default ProfileCard