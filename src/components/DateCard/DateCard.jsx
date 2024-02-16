// components

// css
import styles from './DateCard.module.css'

const DateCard = ({ createdAt }) => {
  const date = new Date(createdAt)
  return (
    <div className={styles.container}>
      <p>{date.toLocaleDateString()} @ {date.toLocaleTimeString()}</p>
    </div>
  )
}

export default DateCard