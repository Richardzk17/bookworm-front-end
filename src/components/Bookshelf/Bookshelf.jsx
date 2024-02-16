import { Link } from "react-router-dom";

// css 
import styles from './Bookshelf.module.css'


const Bookshelf = (props) => {
  return (
    <div className={styles.container}>
      {/* <button onClick={() => props.handleDeleteBook(props.book._id)}>🗑️</button> */}
      <Link to={`/book/${props.book._id}`}>
        <img className={styles.bookCoverImg} src={props.book.coverURL} alt={props.book.title} style={{ width: "130px", height: "200px" }} />
      </Link>
      <button onClick={() => props.handleDeleteBook(props.book._id)}>🗑️</button>
    </div>
  )
}

export default Bookshelf