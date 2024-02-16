import AuthorInfo from "../AuthorInfo/AuthorInfo"

const CommentPost = (props) => {
  return (
    <article>
      <header>
        <AuthorInfo content={props.comment}/>
      </header>
      <p>{props.comment.text}</p>
      {props.comment.author._id === props.user.profile &&
        <button onClick={() => props.handleDeleteComment(props.comment._id)}>Delete</button>
      }
    </article>
  )
}

export default CommentPost