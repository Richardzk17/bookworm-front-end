import CommentPost from "../CommentPost/CommentPost"

const Comments = (props) => {
  return (
    <>
      <popover>
        {props.comments.map(comment =>
          <CommentPost 
            comment={comment} 
          />  
        )}
      </popover>
    </>
  );
}

export default Comments;