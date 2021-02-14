import React, { Component } from 'react'
import Entry from './Entry'
import Button from '../Button'
import ExperienceEntryForm from './ExperienceEntryForm';

export default class EducationOverview extends Component {
  render() {
    const { 
      entries, 
      showAddButton, 
      showEducationEntryForm, 
      handleAddEducationClick,
      deleteEntry,
      handleChange,
      handleSubmit,  
    } = this.props;

    return (
      <div className="experience-overview">
          {entries.map(entry => {
            return <Entry key={entry.id} entry={entry} deleteEntry={deleteEntry}/>
          })}

          {showEducationEntryForm && 
            <ExperienceEntryForm 
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          }
          {showAddButton && !showEducationEntryForm &&
            <Button 
              btnText="+ New Education"
              onClick={handleAddEducationClick}
            />
          }
      </div>
    )
  }
}
