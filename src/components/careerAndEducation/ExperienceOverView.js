import React, { Component } from 'react'
import Entry from './Entry'
import Button from '../Button'
import ExperienceEntryForm from './ExperienceEntryForm';

export default class ExperienceOverView extends Component {
  render() {
    const { 
      entries, 
      showAddButton, 
      showExperienceEntryForm, 
      handleAddExperienceClick,
      deleteEntry,
      handleChange,
      handleSubmit,  
    } = this.props;

    return (
      <div className="experience-overview">
          {entries.map(entry => {
            return <Entry key={entry.id} entry={entry} deleteEntry={deleteEntry}/>
          })}

          {showExperienceEntryForm && 
            <ExperienceEntryForm 
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          }
          {showAddButton && !showExperienceEntryForm &&
            <Button 
              btnText="+ New Experience"
              onClick={handleAddExperienceClick}
            />
          }
      </div>
    )
  }
}
