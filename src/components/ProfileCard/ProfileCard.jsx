// npm modules 
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// services 
import * as profileService from '../../services/profileService'

// css 
import styles from './ProfileCard.module.css'


const ProfileCard = () => {
  const [profiles, setProfiles] = useState([])
  

  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }
    fetchProfiles()
  }, [])

  if (!profiles.length) {
    return <main className={styles.container}><h1>Sorry! I was reading!</h1></main>
  }


  return ( 
    <>
      <h2>hello!</h2>
      <div>
        </div>
    </>
  )
}

export default ProfileCard