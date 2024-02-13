import AuthorInfo from "../AuthorInfo/AuthorInfo"

const CommentCard = ({ comment }) => {
  return (
    <article>
      <header>
        <AuthorInfo content={comment}/>
      </header>
      <button onClick={() => props.handleDeleteComment(comment._id)}></button>
      <p>{comment.text}</p>
    </article>
  )
}

export default CommentCard