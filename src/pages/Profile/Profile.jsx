import { useState, useEffect } from "react"
import * as profileService from '../../services/profileService'
import { useParams } from "react-router-dom"
import Bookshelf from "../../components/bookshelf/bookshelf"
import styles from './Profile.module.css'

const Profile = () => {
  const { profileId } = useParams()
  const [profile, setProfile] = useState({})
  

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.show(profileId)
      setProfile(profileData)
    }
    fetchProfile()
  }, [profileId])

  return (
    <main>
      <div className={styles.container}>
        <div className={styles.profilePic}>
          <img src={profile.photo} alt="profile photo" />
        </div>
        <h1>{`${profile.name}'s Bookshelf`}</h1>
        <div className={styles.content}>
          <div className={styles.bookGrid}>
          {profile.bookshelf?.map(book =>
          <Bookshelf key={book._id} book={book} />
          )}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Profile