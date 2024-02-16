
import styles from './ProfileCard.module.css'

const ProfileCard = ({ profile }) => {
  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const randomWormNumber = getRandomInt(1,6)
  const imgSrc = `/src/assets/worm${randomWormNumber}.png`
  const defaultPhoto = '/src/assets/icons/profile.png'

  return ( 
    <div className={styles.container}>
      <h2 className={styles.profileName}>{profile.name}</h2>
      <img className={styles.profilePics}  src={profile.photo || defaultPhoto} alt="profile photo" />
      {/* <img className={styles.profilePics} src={imgSrc} alt="worm picture" /> */}
    </div>
  )
}

export default ProfileCard




