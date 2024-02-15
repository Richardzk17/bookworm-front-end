// npm modules

// css
import styles from './AddBookBtn.module.css'

// services
import * as bookService from '../../services/bookService'


const AddBookBtn = async (props) => {
  // const checkOLId = async (OLId) => {    
    const book = await bookService.showByOLId(props.OLId)
  // }


  return (
    <div>
      {
        book._id ?  
        (<Link className="inLibraryBtn" to={`/books/${props.book._id}`}>In Library</Link>)
        : (<button className="libraryBtn" onClick={() => props.handleAddBook(props.book)}>Add to Library</button>)
      }
    </div>
  )
}

export default AddBookBtn