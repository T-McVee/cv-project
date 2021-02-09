import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'

export default class DeleteBtn extends Component {
  render() {
    const { handleDeleteSkill } = this.props;
    return (
      <div >
        <FontAwesomeIcon icon="times" onClick={(e) => handleDeleteSkill(e)} />
      </div>
    )
  }
}
