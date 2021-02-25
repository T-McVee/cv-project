import React, { Component } from 'react'
import SkillItem from './SkillItem'
import SkillAdd from './SkillAdd'
import Button from '../Button'


const SkillsOverview = props => {
  
    const { 
      skills, 
      showButton, 
      showAddSkill, 
      handleAddSkillClick, 
      deleteSkill, 
      handleChange, 
      handleSubmit 
    } = props;

  return (
    <div className="skill-display">
      {skills.map(skill => {
        return <SkillItem key={skill.id} skill={skill} deleteSkill={deleteSkill}/>
      })}
      {showAddSkill &&
        <SkillAdd 
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      }
      {showButton && !showAddSkill &&
        <Button 
          btnText="+ New Skill"
          onClick={handleAddSkillClick} 
        />
      }
    </div>
  )
}

export default SkillsOverview;