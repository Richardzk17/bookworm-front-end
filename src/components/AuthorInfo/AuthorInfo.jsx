const AuthorInfo = ({ content }) => {

  return (
    <div>
      <section>
        <h4 style={{ textTransform: 'capitalize' }} >{content.author.name}</h4>
      </section>
    </div>
  )
}

export default AuthorInfo