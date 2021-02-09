import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DisplayBlock from './DisplayBlock'

export default class ContactMethod extends Component {
  render() {
    const {icon, content, label} = this.props
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
}
