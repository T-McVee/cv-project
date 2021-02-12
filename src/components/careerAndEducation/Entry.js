import React, { Component } from 'react'

export default class Entry extends Component {
  render() {
    const { entry } = this.props

    return (
      <div className="entry">
        <div className="row">
          <div className="col col-date">{entry.from} - {entry.to}</div>
          <div className="col col-details">
            <div className="position">{entry.position}</div>
            <div className="company">{entry.company}</div>
            <div className="description">{entry.description}</div>
          </div>
        </div>
      </div>
    )
  }
}
