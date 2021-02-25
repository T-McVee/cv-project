import React, { useState } from 'react'
import uuid from 'react-uuid'
import '../../styles/skills.css'
import SkillAdd from './SkillAdd'
import SkillsOverview from './SkillsOverview'


const Skills = props => {
  const [skill, setSkill] = useState('');
  const [rating, setRating] = useState('7');
  const [skills, setSkills] = useState([]);
  const [showAddButton, setShowAddButton] = useState(false);
  const [showAddSkill, setShowAddSkill] = useState(false);

  const determineKey = (id) => {
    if (id === 'skill') {
      return setSkill
    } else if (id === 'rating') {
      return setRating
    } else if (id === 'skills') {
      return setSkills
    } else if (id === 'showAddButton') {
      return setShowAddButton
    } else {
      return setShowAddSkill
    }
  }

  const handleChange = (e) => {
    const { id, value } = e.target;
    const updateValue = determineKey(id);

    updateValue(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newSkills = {
      id: uuid(),
      title: skill,
      rating: Number(rating),
    };

    setSkills(skills.concat(newSkills));
    setSkill('');
    setRating('7');
    setShowAddSkill(false);

    /* console.log(state); */
  }

  const handleAddSkillClick = (e) => {
    e.preventDefault();

    setShowAddSkill(true);
  }

  const deleteSkill = (id) => {
    const currentSkills = [...skills]
    const newSkills = currentSkills.filter(skill => skill.id !== id)

    setSkills(newSkills);
  }

  const handleMouseEnter = () => {
    setShowAddButton(true);
  }

  const handleMouseLeave = () => {
    setShowAddButton(false);
  }
  
  return (
    <section 
      className="skills section" 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <h2>Skills</h2>
      {skills.length === 0 ? (
        <div className="container">
          <SkillAdd 
            handleChange={handleChange} 
            handleSubmit={handleSubmit}
          />
        </div>
        ) : (
        <SkillsOverview 
          skills={skills} 
          showButton={showAddButton}
          showAddSkill={showAddSkill}
          handleAddSkillClick={handleAddSkillClick}
          deleteSkill={deleteSkill}
          handleChange={handleChange} 
          handleSubmit={handleSubmit} 
        />
        )
      }
    </section>
  )
  
}

export default Skills;