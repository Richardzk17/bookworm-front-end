// npm modules
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// components

//services
import * as bookService from '../../services/bookService'

// styles
import styles from '../BookDetails/BookDetails.module.css'



const BookDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [book, setBook] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchBookDetails = async () => {
      setLoading(true);
      try {
        const book = await bookService.show(id);
        setBook(book);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchBookDetails();
  }, [id]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {loading ? (
          error ? (
            <div>There was an error. Please refresh the page or go back to the previous page.</div>
          ) : (
            <div>Loading...</div>
          )
        ) : (
          <div>
            <div className={styles.bookCover}>
              <img
                src={book.coverURL}
                alt={`Cover of ${book.title}`}
                style={{ width: "150px", height: "auto" }}
              />
            </div>
            <div className={styles.bookDetails}>
              <p>{book.title}</p>
              <p>{book.author}</p>
              <p>{book.summary}</p>
              <p>{book.publishYear}</p>
              <p>{book.pageCount}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookDetails;