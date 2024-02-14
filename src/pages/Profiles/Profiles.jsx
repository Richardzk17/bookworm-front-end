// npm modules
import { useState, useEffect } from 'react'
// services 
import * as profileService from '../../services/profileService'
// components
import ProfileCard from '../../components/ProfileCard/ProfileCard'
// css
import styles from './Profiles.module.css'

const Profiles = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }
    fetchProfiles()
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>All Bookworms!</h1>
        <div className={styles.profileGrid}>
          {profiles.map(profile => (
            <ProfileCard key={profile._id} profile={profile} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Profiles
