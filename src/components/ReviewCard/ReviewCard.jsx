import AuthorInfo from "../AuthorInfo/AuthorInfo"

const ReviewCard = ({ comment }) => {
  return (
    <article>
      <header>
        <AuthorInfo content={}/>
      </header>
      <p>{comment.text}</p>
    </article>
  )
}

export default ReviewCard