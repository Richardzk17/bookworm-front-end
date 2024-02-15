import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Search from "../BookSearch/Search";
import useBookSearch from "../../components/SearchBook/SearchBook";

//css
import styles from '../BookSearch/BookSearch.module.css'


//services
import * as bookService from '../../services/bookService'
import * as libraryApiService from '../../services/library-api'

//component
import AddBookBtn from '../../components/AddBookBtn/AddBookBtn';

export const getIdOfBook = (key) => {
  let newKey = key.split("/")
  return newKey[newKey.length - 1]
}

// added user ? in case we change it in the future for guests to be able to search, leave for now -Bri
const BookSearch = ({ user }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { books, loading } = useBookSearch(searchTerm);
  const navigate = useNavigate()

  // Bri's code here
  const handleAddBook = async (book) => {
    const OLId = getIdOfBook(book.key)
    const description = await libraryApiService.getBookDescription(OLId)
    
    const bookData = {
      title: book.title,
      author: book.author_name [0],
      OLId: OLId,
      summary: description,
      publishYear: book.first_publish_year,
      pageCount: book.number_of_pages_median,
      coverURL: `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg` 
    }
    const newBook = await bookService.create(bookData)
    navigate(`/book/${newBook._id}`)
  }
  // to here
  
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.center}>
          <Search term={searchTerm} searchKeyword={setSearchTerm} />
        </div>
        {loading && <p className={styles.loading}>Loading...</p>}
        <ul className={styles.bookList}>
          {books.slice(0, 20).map((book, index) => (
            <li key={index}>
              <img
                src={getCoverUrl(book)}
                alt={`Cover of ${book.title}`}
                style={{ width: "150px", height: "auto" }}
              />
              <div to={`/book/${getIdOfBook(book.key)}`}>
                <p className={styles.title}>{book.title}</p>
              </div>
              {book.author_name && (
                <p>Author: {book.author_name.join(", ")}</p>
              )}
              {book.first_publish_year && (
                <p>First Publish Year: {book.first_publish_year}</p>
              )}
              {user ? <AddBookBtn book={book} OLId={getIdOfBook(book.key)} handleAddBook={handleAddBook} /> : "" }
            </li>
          ))}
        </ul>
      </div>
    </div>
  )

}

export default BookSearch;

export const getCoverUrl = (book) => {
  if (book.cover_i) {
    return `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
  }
  return "https://www.press.uillinois.edu/books/images/no_cover.jpg";
};


