// npm modules
import { Link } from "react-router-dom"
// css
import styles from './AddToMyShelfBtn.module.css'

// services



const AddToMyShelfBtn = (props) => {
  console.log(props)
  const hasBook = () => {
    return props.profile.bookshelf.find(book => book._id === props.bookId)
  }

  return (
    <div>
      {
        hasBook() ?  
        (<Link className={styles.inLibrary} to={'/profile'}>In My Bookshelf</Link>)
        : (<button className={styles.libraryBtn} onClick={() => props.handleAddBook(props.bookId)}>Add to My Bookshelf</button>)
      }
    </div>
  )
}

export default AddToMyShelfBtn