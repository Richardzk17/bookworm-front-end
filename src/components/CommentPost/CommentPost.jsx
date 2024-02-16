import AuthorInfo from "../AuthorInfo/AuthorInfo"

const CommentPost = (props) => {
  return (
    <article>
      <header>
        <AuthorInfo content={props.comment}/>
      </header>
      {props.comment.author._id === props.user.profile &&
        <button onClick={() => props.handleDeleteComment(props.comment._id)}>🗑️</button>
      }
      <p>{props.comment.text}</p>
    </article>
  )
}

export default CommentPost