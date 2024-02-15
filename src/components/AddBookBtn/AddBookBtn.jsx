// npm modules
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
// css
import styles from './AddBookBtn.module.css'

// services
import * as bookService from '../../services/bookService'


const AddBookBtn = (props) => {
  const [bookId, setBook] = useState()
  
  useEffect(() => {
    const fetchBook = async () => {
      const book = await bookService.showByOLId(props.OLId)
      setBook(book?._id)
    }
    fetchBook()
  })

  return (
    <div>
      {
        bookId ?  
        (<Link className="inLibraryBtn" to={`/books/${bookId}`}>In Library</Link>)
        : (<button className="libraryBtn" onClick={() => props.handleAddBook(props.book)}>Add to Library</button>)
      }
    </div>
  )
}

export default AddBookBtn
