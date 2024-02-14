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

  return (
    <main>
      <div className={styles.container}>
        <h1>{`${myProfile.name}'s Bookshelf`}</h1>
        <div className={styles.content}>
          <div>
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
