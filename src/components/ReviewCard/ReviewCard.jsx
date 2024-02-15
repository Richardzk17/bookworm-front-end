import AuthorInfo from "../AuthorInfo/AuthorInfo"

const ReviewCard = ({ review }) => {
  return (
    <article>
      <header>
        <AuthorInfo content={review}/>
      </header>
      <p>{review.text}</p>
      <button onClick={() => props.handleUpdateReview(review._id)}>📝</button>
      <button onClick={() => props.handleDeleteReview(review._id)}>🗑️</button>
    </article>
  )
}

export default ReviewCard