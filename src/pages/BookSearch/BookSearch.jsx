import { useState } from "react";
import { Link } from "react-router-dom";
import Search from "../BookSearch/Search";
import useBookSearch from "../../components/SearchBook/SearchBook";

import styles from '../BookSearch/BookSearch.css'

const BookSearch = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const { books, loading } = useBookSearch(searchTerm);
  
  
    const getIdOfBook = (key) => {
      let newKey = key.split("/")
      return newKey[newKey.length - 1]
    }

    return ( 
        <div className="container">
        <div className="content">
        <div>
      <Search term={searchTerm} searchKeyword={setSearchTerm} />
      {loading && <p>Loading Books...</p>}
      <ul>
        {books.slice(0, 10).map((book, index) => {
          return (
            <li key={index}>
              <Link to={`/book/${getIdOfBook(book.key)}`}>
                <p>Title: {book.title}</p>
              </Link>
              {book.author_name && (
                <p>Author: {book.author_name.join(", ")}</p>
              )}
              {book.first_publish_year && (
                <p>First Publish Year: {book.first_publish_year}</p>
              )}
              <img
                src={getCoverUrl(book)}
                alt={`Cover of ${book.title}`}
                style={{ width: "150px", height: "auto" }}
              />
            </li>
          )
        }
        )}
      </ul>
    </div>

        </div>
        </div>
     );
}
 
export default BookSearch;

export const getCoverUrl = (book) => {
    if (book.cover_i) {
      return `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
    }
    return "https://via.placeholder.com/150";
  };
  
  
  