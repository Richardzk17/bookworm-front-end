// css
import styles from './MyProfile.module.css'

// npm modules
import { useState, useEffect } from 'react'

// components
import Bookshelf from '../../components/Bookshelf/Bookshelf'
import * as profileService from '../../services/profileService'

// services

const MyProfile = (props) => {
  const [myProfile, setMyProfile] = useState({})
  useEffect(() => {
    const fetchMyProfile = async () => {
      const profileData = await profileService.show(props.user.profile)
      setMyProfile(profileData)
    }
    fetchMyProfile()
  }, [])

  const defaultPhoto = '/src/assets/icons/profile.png'

  return (
    <main>
      <div className={styles.container}>
        <div className={styles.picContainer}>
          <img src={myProfile.photo || defaultPhoto} alt="profile photo" />
          </div>
        <h1>{`${myProfile.name}'s Bookshelf`}</h1>
        <div className={styles.content}>
          <div className={styles.bookGrid}>
          {myProfile.bookshelf?.map(book =>
          <Bookshelf key={book._id} book={book} />
          )}
          </div>
        </div>
      </div>
    </main>
  )
}

export default MyProfile
