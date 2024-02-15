// npm modules

// css
import styles from './AddBookBtn.module.css'

// services
import * as bookService from '../../services/bookService'


const AddBookBtn = async (props) => {
  const [bookId, setBook] = useState(null)
  
  useEffect(() => {
    const fetchBook = async () => {
      const book = await bookService.showByOLId(props.OLId)
      setBook(book._id)
    }
    fetchBook()
  })
  
  return (
    <div>
      {
        book._id ?  
        (<Link className="inLibraryBtn" to={`/books/${bookId}`}>In Library</Link>)
        : (<button className="libraryBtn" onClick={() => props.handleAddBook(props.book)}>Add to Library</button>)
      }
    </div>
  )
}

export default AddBookBtn