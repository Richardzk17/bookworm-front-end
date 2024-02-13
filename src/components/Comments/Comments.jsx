import CommentPost from "../CommentPost/CommentPost"

const Comments = (props) => {
  return (
    <>
      <popover>
        {props.comments.map(comment =>
          <CommentPost 
            comment={comment} 
            key={comment._id} 
            user={props.user}
          />  
        )}
      </popover>
    </>
  );
}

export default Comments;