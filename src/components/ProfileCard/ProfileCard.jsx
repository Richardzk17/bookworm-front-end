// css 
import styles from './ProfileCard.module.css'

const ProfileCard = ({ profile }) => {
  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const randomWormNumber = getRandomInt(1,6)
  const imgSrc = `/src/assets/worm${randomWormNumber}.png`


  return ( 
    <div className={styles.container}>
      <img className={styles.profilePic} src={imgSrc} alt="photo" />
      <h2 className={styles.profile}>{profile.name}</h2>
    </div>
  )
}

export default ProfileCard