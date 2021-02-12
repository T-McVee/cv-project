import React, { Component } from 'react'
import uuid from 'react-uuid'
import SkillItem from './SkillItem'
import SkillAdd from './SkillAdd'
import Button from '../Button'


export default class SkillsOverview extends Component {
  
  

  render() {
    const { skills, showButton, showAddSkill, handleAddSkillClick, deleteSkill, handleChange, handleSubmit } = this.props;

    return (
      <div className="skill-display">
        {skills.map(skill => {
          return <SkillItem key={uuid()} skill={skill} deleteSkill={deleteSkill}/>
        })}
        {showAddSkill &&
          <SkillAdd 
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        }
        {showButton &&
          <Button 
          btnText="Add skill"
          onClick={handleAddSkillClick} />
        }
       
      </div>
    )
  }
}
