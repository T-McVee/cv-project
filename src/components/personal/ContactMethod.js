import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DisplayBlock from '../DisplayBlock'

const ContactMethod = props => {
  const {icon, content, label} = props
  
  return (
    <div>
      <div className="contact-method">
        <FontAwesomeIcon icon={icon} className="icon"/>
        <div className="text">
          <DisplayBlock
            content={content}
            label={label}
          />
        </div>
      </div>
    </div>
  )
}

export default ContactMethod
