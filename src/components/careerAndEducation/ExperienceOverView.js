import React, { Component } from 'react'
import uuid from 'react-uuid'
import Entry from './Entry'

export default class ExperienceOverView extends Component {
  render() {
    const { entries, showAddButton } = this.props;

    return (
      <div className="experience-overview">
          {entries.map(entry => {
            return <Entry key={uuid()} entry={entry}/>
          })}
          {showAddButton && 
            <p>Poop</p>
          }
      </div>
    )
  }
}
