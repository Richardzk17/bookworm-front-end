// css 

// npm modules
import { useState, useEffect } from 'react'

// components
import Bookshelf from '../../components/Bookshelf/Bookshelf'
import * as profileService from '../../services/profileService'

// services


const MyProfile = (props) => {

  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }
    fetchProfiles()
  }, [])


  // Check if user and user.bookshelf exist before using them
  // if (!profile || !profile.bookshelf) {
  //   return <div>Loading...</div> // or handle the loading state accordingly
  // }


  return (
    <main>
      <h1>{`${props.profile.name}'s Bookshelf`}</h1>
      {props.profile.bookshelf.map(book =>
        <Bookshelf key={book._id} book={book} />
      )}
    </main>
  )
}

export default MyProfile


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
        <div>
          {profiles.map(profile => (
            <ProfileCard key={profile._id} profile={profile} />
          ))}
        </div>
      </div>
    </div>
  )
}