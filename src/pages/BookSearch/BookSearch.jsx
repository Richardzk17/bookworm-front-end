import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Search from "../BookSearch/Search";
import useBookSearch from "../../components/SearchBook/SearchBook";

import styles from '../BookSearch/BookSearch.css'
// import LibraryList from "../LibraryList/LibraryList";

//services
import * as bookService from '../../services/bookService'
//component
import AddBookBtn from '../../components/AddBookBtn/AddBookBtn';

export const getIdOfBook = (key) => {
  let newKey = key.split("/")
  return newKey[newKey.length - 1]
}

const BookSearch = ({ user }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { books, loading } = useBookSearch(searchTerm);
  const navigate = useNavigate()

  // Bri's code here
  const handleAddBook = async (book) => {
    const bookData = {
      title: book.title,
      author: book.author_name [0],
      OLId: getIdOfBook(book.key),
      coverURL: `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg` 
    }
    const newBook = await bookService.create(bookData)
    navigate(`/books/${newBook._id}`)
  }
  // to here

  return (
    <div className="container">
      <div className="content">
        <div className="center">
          <Search term={searchTerm} searchKeyword={setSearchTerm} />
        </div>
        {loading && <p>Loading Books...</p>}
        <ul className="book-list">
          {books.slice(0, 20).map((book, index) => (
            <li key={index}>
              <img
                src={getCoverUrl(book)}
                alt={`Cover of ${book.title}`}
                style={{ width: "150px", height: "auto" }}
              />
              <Link to={`/book/${getIdOfBook(book.key)}`}>
                <p className="title">{book.title}</p>
              </Link>
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


