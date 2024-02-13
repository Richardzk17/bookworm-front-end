import { useState, useEffect } from "react";
import { searchBooksByTitle } from "../../services/library-api";

const useBookSearch = (searchTerm) => { 
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setLoading(true)
    try {
      const books = await searchBooksByTitle(searchTerm)
      setBooks(books)
      setLoading(false)
    } catch (error) {
      setError(error.message)
      setLoading(false)
    }
  };

  useEffect(() => {
    if (searchTerm) {
      handleSearch()
    }
  }, [searchTerm])

  return { books, loading, error }
};

export default useBookSearch;
