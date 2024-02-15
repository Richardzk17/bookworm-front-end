// npm modules
import { useState } from "react"

// css
// import styles from './AddReview/AddReview.module.css'

// components


const AddReview = (props) => {
  const [formData, setFormData] = 
    useState({text: '', recommended: false, rating: '5'}
    )
  
  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  const handleCheckbox = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.checked})
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleAddReview(formData)
    setFormData({text: '', recommended: false, rating: '5'})
    props.handleClose()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="rating-input">Rating:</label>
      <select
        required
        name="rating"
        id="rating-input"
        value={formData.rating}
        onChange={handleChange}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <label htmlFor="recommended-input">Recommend to Others?</label>
      <input
        type="checkbox"
        name="recommended"
        id="recommended-input"
        checked={formData.recommended}
        onChange={handleCheckbox}
      />
      <label htmlFor="text-input">Add Review</label>
      <textarea
        required
        type="text"
        name="text"
        id="text-input"
        value={formData.text}
        placeholder="Text"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default AddReview