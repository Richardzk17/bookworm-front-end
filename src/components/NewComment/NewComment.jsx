// npm modules
import { useState } from "react"

// css
import styles from './NewComment.module.css'

// components


const NewComment = (props) => {
  const [formData, setFormData] = useState({text: ''})
  
  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleAddComment(formData)
    setFormData({text: ''})
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <textarea 
        name="text" 
        required
        placeholder="Add a Comment"
        value={formData.text}
        onChange={handleChange}
      />
      <div className={styles['button-container']}>
        <button className={styles.commentBtn} type="submit">Submit Comment</button>
      </div>
    </form>
  );
  
}

export default NewComment