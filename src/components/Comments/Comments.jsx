// npm modules
import { useState } from 'react'
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';


//services


// components
import NewComment from "../../components/NewComment/NewComment"
import CommentPost from "../CommentPost/CommentPost"

// styles

const Comments = (props) => {
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
              handleDeleteComment={props.handleDeleteComment}
            />   
          )}
          <NewComment handleAddComment={props.handleAddComment}/>
        </section>
      </Popover>
    </>
  );
}

export default Comments; 