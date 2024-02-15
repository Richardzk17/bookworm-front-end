// npm modules
// import { useState } from "react"

// css
import styles from './Reviews.module.css'

// components


const Reviews = () => {
  if (!props.comments.length) return <h4>No Comments</h4>
  
  return (
    <>
      {props.comments.map(comment =>
        <CommentCard 
          comment={comment} 
          key={comment._id} 
          user={props.user}
        />  
      )}
    </>
  )
}

export default Reviews;