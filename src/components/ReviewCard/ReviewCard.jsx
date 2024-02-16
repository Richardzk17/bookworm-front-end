// npm modules
import { useState } from 'react';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';

// components
import AuthorInfo from "../AuthorInfo/AuthorInfo"
import EditReview from '../EditReview/EditReview';

import styles from '../../components/ReviewCard/ReviewCard.module.css'

const ReviewCard = ({ user, review, handleEditReview, handleDeleteReview }) => {
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
    <article className={styles.reviewCard}>
      <header className={styles.reviewHeader}> 
        <AuthorInfo content={review}/>
      </header>
      <p className={styles.rating}>Rating: {review.rating}</p> 
      <p className={styles.recommended}>Recommended: {review.recommended ? 'Yes' : 'No'}</p> 
      <p className={styles.reviewText}>Comment: {review.text}</p> 
      {user && review.author._id === user.profile && (
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
            BackdropProps={{
              style: {
                backgroundColor: 'rgba(0, 0, 0, 0.5)', 
              },
            }}
            PaperProps={{
              style: {
                width: '70%', 
                height: '450px',
                border:'3px solid lightgray' 
              },
            }}
          >
            <EditReview review={review} handleEditReview={handleEditReview} handleClose={handleClose} />
          </Popover>
          <Button className={styles.reviewButton} aria-describedby={popId} variant="contained" onClick={handleClick}>
            Edit Review
          </Button>
          <button className={styles.deleteButton} onClick={() => handleDeleteReview(review._id)}>🗑️</button> {/* Apply classname to delete button */}
        </>
      )}
    </article>
  )
}

export default ReviewCard;
