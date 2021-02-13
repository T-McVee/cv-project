import React, { Component } from 'react'
import uuid from 'react-uuid'
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

          <div className="row">
            <div className="col r-align">
              {showAddButton && 
                <Button 
                  btnText="Add Experience"
                  onClick={handleAddExperienceClick}
                />
              }
            </div>
          </div>
      </div>
    )
  }
}
