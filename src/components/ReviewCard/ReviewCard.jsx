import AuthorInfo from "../AuthorInfo/AuthorInfo"

const ReviewCard = ({review, handleUpdateReview, handleDeleteReview}) => {
  return (
    <article>
      <header>
        <AuthorInfo content={review}/>
      </header>
      <h3>Rating: {review.rating}</h3>
      <h3>Recommended: {review.recommended? 'Yes' : 'No'}</h3>
      <p>{review.text}</p>
      <button onClick={() => handleUpdateReview(review._id)}>📝</button>
      <button onClick={() => handleDeleteReview(review._id)}>🗑️</button>
    </article>
  )
}

export default ReviewCard