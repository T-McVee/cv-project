import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
import '../styles/button.css'

export default class DeleteBtn extends Component {
  render() {
    const { handleDeleteSkill } = this.props;
    return (
      <FontAwesomeIcon icon="times" className="btn-delete" onClick={(e) => handleDeleteSkill(e)} />
    )
  }
}
