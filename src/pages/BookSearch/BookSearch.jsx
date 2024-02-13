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

        </div>
        </div>
     );
}
 
export default BookSearch;