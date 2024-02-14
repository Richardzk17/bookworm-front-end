// css 

// npm modules
import { useState, useEffect } from 'react'

// components
import Bookshelf from '../../components/Bookshelf/Bookshelf'
import * as profileService from '../../services/profileService'

// services

const MyProfile = () => {
  const [myProfile, setMyProfile] = useState([])
  useEffect(() => {
    const fetchMyProfile = async () => {
      const profileData = await profileService.show()
      setMyProfile(profileData)
    }
    fetchMyProfile()
  }, [])

  return (
    <main>
      <h1>{`person's Bookshelf`}</h1>
      <div>
        {myProfile.bookshelf.map(book =>
        <Bookshelf key={book._id} book={book} />
        )}
      </div>
    </main>
  )
}

export default MyProfile