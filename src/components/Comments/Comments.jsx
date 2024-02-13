// npm modules
import { useState } from 'react'

//services
import * as bookService from '../../services/bookService'

// components
import NewComment from "../../components/NewComment/NewComment"
import CommentPost from "../CommentPost/CommentPost"

// styles

const Comments = (props) => {
  const [comments, setComments] = useState([])
  
  const handleAddComment = async (commentFormData) => {
    const newComment = await bookService.create(commentFormData)
    setComments([newComment, ...comments])
    navigate(`/book/${commentFormData.bookId}/comments`)
  }

  const handleUpdateComment = async (commentFormData) => {
    const updatedComment = await bookService.update(commentFormData)
    setComments(comments.map(comment => comment._id === updatedComment._id ? updatedComment : comment))
    navigate(`/book/${commentFormData.bookId}/comments`)
  }

  const handleDeleteComment = async (bookId, commentId) => {
    const deletedComment = await bookService.deleteComment(bookId, commentId)
    setComments(comments.filter(comment => comment._id !== deletedComment._id))
    navigate(`/book/${bookId}/comments`)
  }

  return (
    <>
      <Popover>
        <h1>Comments</h1>
        <section>
          {props.comments.map(comment =>
            <CommentPost 
              comment={comment} 
              handleUpdateComment={handleUpdateComment} 
              handleDeleteComment={handleDeleteComment}
            />   
          )}
          <NewComment handleAddComment={handleAddComment}/>
        </section>
      </Popover>
    </>
  );
}

export default Comments; 