import { useState, useEffect } from "react"
import * as profileService from '../../services/profileService'
import { useParams } from "react-router-dom"


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
    <>
      <div>
        <h1>{profile.name}</h1>
      </div>
    </>
  )
}

export default Profile