import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/button.css'

const DeleteBtn = (props) => {
  const { handleClick } = props;
  
  return (
    <FontAwesomeIcon icon="times" className="btn-delete" onClick={(e) => handleClick(e)} />
  )
}

export default DeleteBtn