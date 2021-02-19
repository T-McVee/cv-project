import React, { Component } from 'react'
import DeleteBtn from "../DeleteBtn"

export default class Entry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showDeleteButton: false,
    }

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleDeleteEntryClick = this.handleDeleteEntryClick.bind(this)
  }

  handleMouseEnter() {
    this.setState({
      showDeleteButton: true,
    })
  }

  handleMouseLeave() {
    this.setState({
      showDeleteButton: false,
    })
  }

  handleDeleteEntryClick() {
    this.props.deleteEntry(this.props.entry.id)
  }
  
  render() {
    const { entry } = this.props
    return (
      <div 
        className="entry" 
        onMouseEnter={this.handleMouseEnter} 
        onMouseLeave={this.handleMouseLeave}
      >
        <div className="row">
          <div className="col col-date">{entry.from || entry.edFrom} - {entry.to || entry.edTo}</div>
          <div className="col col-details">
            <div className="position">{entry.title || entry.cert}</div>
            <div className="company">{entry.place || entry.school}</div>
            <div className="description">{entry.description}</div>
            {this.state.showDeleteButton && 
              <div className="delete"><DeleteBtn handleClick={this.handleDeleteEntryClick}/></div>
            }
          </div>
        </div>
      </div>
    )
  }
}
