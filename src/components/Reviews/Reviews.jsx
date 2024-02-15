// npm modules
// import { useState } from "react"

// css
// import styles from './Reviews.module.css'

// components
import ReviewCard from "../../components/ReviewCard/ReviewCard"

const Reviews = (props) => {
  if (!props.reviews.length) return <h4>No Reviews</h4>
  
  return (
    <>
      {props.reviews.map(review =>
        <ReviewCard 
          review={review} 
          key={review._id} 
          user={props.user}
          handleDeleteReview={props.handleDeleteReview}
          handleEditReview={props.handleEditReview}
        />  
      )}
    </>
  )
}

export default Reviews;