import AuthorInfo from "../AuthorInfo/AuthorInfo"

const CommentPost = (props) => {
  return (
    <article>
      <header>
        <AuthorInfo content={props.comment}/>
      </header>
      <button onClick={() => props.handleUpateComment(props.comment._id)}>📝</button>
      <button onClick={() => props.handleDeleteComment(props.comment._id)}>🗑️</button>
      <p>{props.comment.text}</p>
    </article>
  )
}

export default CommentPost