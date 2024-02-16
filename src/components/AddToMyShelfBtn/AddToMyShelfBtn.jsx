// npm modules
import { useState } from "react"
import { Link } from "react-router-dom"
// css
import styles from './AddToMyShelfBtn.module.css'

// services



const AddBookBtn = (props) => {
  const [bookId, setBook] = useState()
  

  return (
    <div>
      {
        bookId ?  
        (<Link className={styles.inLibrary} to={`/book/${bookId}`}>In Library</Link>)
        : (<button className={styles.libraryBtn} onClick={() => props.handleAddBook(props.book)}>Add to Library</button>)
      }
    </div>
  )
}

export default AddBookBtn