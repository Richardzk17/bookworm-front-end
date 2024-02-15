// npm modules
import { useState } from 'react';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';

// components
import AuthorInfo from "../AuthorInfo/AuthorInfo"
import EditReview from '../EditReview/EditReview';

const ReviewCard = ({user, review, handleEditReview, handleDeleteReview}) => {
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
    <article>
      <header>
        <AuthorInfo content={review}/>
      </header>
      <h3>Rating: {review.rating}</h3>
      <h3>Recommended: {review.recommended? 'Yes' : 'No'}</h3>
      <p>{review.text}</p>
      {review.author._id === user.profile &&
      <>
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
          <EditReview review={review} handleEditReview={handleEditReview} handleClose={handleClose} />
        </Popover>
        <Button aria-describedby={popId} variant="contained" onClick={handleClick} >📝</Button>
        <button onClick={() => handleDeleteReview(review._id)}>🗑️</button>
      </>
      }      
    </article>
  )
}

export default ReviewCard

