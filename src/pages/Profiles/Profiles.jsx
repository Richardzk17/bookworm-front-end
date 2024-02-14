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

  if (!profiles.length) {
    return <main className={styles.container}><h1>Loading...</h1></main>
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>All Bookworm Profile Users</h1>
        {profiles.map(profile => (
          <p key={profile._id} className={styles.profile}>{profile.name}
          <ProfileCard /></p>
        ))}
      </div>
    </div>
  )
}

export default Profiles
