// css 
import styles from './Bookshelf.module.css'


const Bookshelf = (props) => {
  return (
      <div className={styles.container}>
      <h2 className={styles.book}>{props.book.title} by {props.book.author}</h2>
    </div>
  )
}

export default Bookshelf