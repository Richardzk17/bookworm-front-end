// npm modules
import { useState } from 'react'
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';


//services
import * as bookService from '../../services/bookService'

// components
import NewComment from "../../components/NewComment/NewComment"
import CommentPost from "../CommentPost/CommentPost"

// styles

const Comments = (props) => {
  const [comments, setComments] = useState([])
  
  const handleAddComment = async (commentFormData) => {
    const newComment = await bookService.create(props.bookId, commentFormData)
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

  //popover from mui 
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const popId = open ? 'simple-popover' : undefined;

  return (
    <>
      <Button aria-describedby={popId} variant="contained" onClick={handleClick}>Comments</Button>
      <Popover
        id={popId}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
      >
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