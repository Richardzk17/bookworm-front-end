import AuthorInfo from "../AuthorInfo/AuthorInfo"

const CommentPost = (props) => {
  return (
    <article>
      <header>
        <AuthorInfo content={props.comment}/>
      </header>
      {review.author._id === user.profile &&
        <button onClick={() => props.handleDeleteComment(props.comment._id)}>🗑️</button>
      }
      <p>{props.comment.text}</p>
    </article>
  )
}

export default CommentPost