// css
import styles from './MyProfile.module.css'

// npm modules
import { useState, useEffect } from 'react'

// components
import Bookshelf from '../../components/bookshelf/bookshelf'

// services
import * as profileService from '../../services/profileService'

const MyProfile = (props) => {
  const [myProfile, setMyProfile] = useState({})
  useEffect(() => {
    const fetchMyProfile = async () => {
      const profileData = await profileService.show(props.user.profile)
      setMyProfile(profileData)
    }
    fetchMyProfile()
  }, [])

  const handleDeleteBook = async (bookId) => {
    const deletedBookId = await profileService.deleteFromBookshelf(bookId)
    const bookshelf = myProfile.bookshelf.filter(b => b._id !== deletedBookId)
    setMyProfile({ ...myProfile, bookshelf: bookshelf })
  }

  const defaultPhoto = '/src/assets/icons/profile.png'

  return (
    <main>
      <div className={styles.container}>

        <div className={styles.content}>
          <div className={styles.leftColumn}>
            <div className={styles.picContainer}>
              <img src={myProfile.photo || defaultPhoto} alt="profile photo" />
            </div>
            <h1>{`${myProfile.name}'s Bookshelf`}</h1>
          </div>
          <div className={styles.rightColumn}>
            <div className={styles.bookGrid}>
              {myProfile.bookshelf?.map(book =>
                <Bookshelf key={book._id} book={book} handleDeleteBook={handleDeleteBook} />
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default MyProfile
