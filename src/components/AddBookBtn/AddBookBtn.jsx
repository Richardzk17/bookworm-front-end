// npm modules

// css
import styles from './AddBookBtn.module.css'

// services
import * as bookService from '../../services/bookService'


const AddBookBtn = (props) => {
  const checkOLId = async (OLId) => {    
    const book = await bookService.showByOLId(OLId)
  }


  return (

  )
}

export default AddBookBtn