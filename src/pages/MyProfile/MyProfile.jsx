// css 

// npm modules

// components
import Bookshelf from '../../components/Bookshelf/Bookshelf'

// services


const MyProfile = (props) => {
  return (
    <main>
      <div>
        <h1>{`${props.user.name}'s Bookshelf`}</h1>
      </div>
      <div>
        <Bookshelf />
      </div>
    </main>
  )
}

export default MyProfile