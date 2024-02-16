import AuthorInfo from "../AuthorInfo/AuthorInfo"
import styles from "../CommentPost/CommentPost.module.css"

const CommentPost = (props) => {
  return (
    <article>
      <header className={styles.header}>
        <AuthorInfo content={props.comment} />
        <span className={styles.timestamp}>
          {new Date(props.comment.createdAt).toLocaleDateString()} @ {new Date(props.comment.createdAt).toLocaleTimeString()}
        </span>
      </header>
      <p>{props.comment.text}</p>
      {props.comment.author._id === props.user.profile &&
        <button className={styles.deleteBtn} onClick={() => props.handleDeleteComment(props.comment._id)}>Delete</button>
      }
    </article>
  )
}

export default CommentPost;

