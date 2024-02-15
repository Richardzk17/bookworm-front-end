// npm modules
import { useState } from 'react';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';

//components
import AuthorInfo from "../AuthorInfo/AuthorInfo"

const ReviewCard = ({review, handleUpdateReview, handleDeleteReview}) => {
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
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Add Review</Button>
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
      <button onClick={() => handleUpdateReview(review._id)}>📝</button>
      </Popover>
      <button onClick={() => handleDeleteReview(review._id)}>🗑️</button>
    </article>
  )
}

export default ReviewCard

