// npm modules
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// components
import AddReview from "../../components/AddReview/AddReview"
import Reviews from "../../components/Reviews/Reviews"

//services
import * as bookService from '../../services/bookService'

// styles
import styles from '../BookDetails/BookDetails.module.css'



const BookDetails = (props) => {
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

  const handleAddReview = async (reviewFormData) => {
    const newReview = await bookService.createReview(id, reviewFormData)
    setBook({...book, reviews: [...book.reviews, newReview]})
  }

  const handleDeleteReview = async (reviewId) => {
    const deletedReviewId = await bookService.deleteReview(id, reviewId)
    const reviews = book.reviews.filter(r => r._id !== deletedReviewId)
    setBook({...book, reviews: reviews})
  }

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
                  <AddReview handleAddReview={handleAddReview}/>
                  <Reviews 
                    reviews={book.reviews} 
                    user={props.user} 
                    handleDeleteReview={handleDeleteReview}
                  />
                </section>
              </div>
            </>
        )}
      </div>
    </div>
  );
};

export default BookDetails;