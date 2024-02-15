// components
import DateCard from '../DateCard/DateCard'

// assets


// css


const AuthorInfo = ({ content }) => {
  const photo = content.author.photo ? content.author.photo : profileIcon 

  return (
    <div className={styles.container}>
      <img src={photo} alt="The user's avatar" /> 
      <section>
        <h4>{content.author.name}</h4>
        <DateCard createdAt={content.createdAt} />
      </section>
    </div>
  )
}

export default AuthorInfo