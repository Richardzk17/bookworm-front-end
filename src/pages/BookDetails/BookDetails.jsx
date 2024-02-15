// npm modules
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// components
import NewReview from "../../components/NewReview/NewReview"
import Reviews from "../../components/Reviews/Reviews"

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
            <>
              <div className={styles.leftColumn}>
                <img
                  src={book.coverURL}
                  alt={`Cover of ${book.title}`}
                  style={{ width: "150px", height: "auto" }}
                  className={styles.bookCover}
                />
              </div>
              <div className={styles.rightColumn}>
                <h1>{book.title}</h1>
                <h3>{book.author}</h3>
                <p>{book.summary}</p>
                <h4>First Published: {book.publishYear}</h4>
                <h4>Pages: {book.pageCount}</h4>
                <section>
                  <h1>Reviews</h1>
                  <NewReview handleAddReview={handleAddReview}/>
                  <Reviews reviews={book.reviews} user={props.user} />
                </section>
              </div>
            </>
        )}
      </div>
    </div>
  );
};

export default BookDetails;