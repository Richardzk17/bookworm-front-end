// components

// css
import styles from './DateCard.module.css'

const DateCard = ({ createdAt }) => {
  const date = new Date(createdAt)
  return (
    <div className={styles.container}>
      {/* <Icon category="Calendar" /> (from hoot and kept it to rememeber to add icons) */}
      <h5>{date.toLocaleDateString()} @ {date.toLocaleTimeString()}</h5>
    </div>
  )
}

export default DateCard