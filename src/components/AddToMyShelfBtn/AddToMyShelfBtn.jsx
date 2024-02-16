// npm modules
import { Link } from "react-router-dom"
// css
import styles from './AddToMyShelfBtn.module.css'

// services



const AddBookBtn = (props) => {
  const hasBook = props.bookshelf.includes(props.bookId)

  return (
    <div>
      {
        hasBook ?  
        (<Link className={styles.inLibrary} to={'/profile'}>In My Bookshelf</Link>)
        : (<button className={styles.libraryBtn} onClick={() => props.handleAddBook(props.bookId)}>Add My Bookshelf</button>)
      }
    </div>
  )
}

export default AddBookBtn