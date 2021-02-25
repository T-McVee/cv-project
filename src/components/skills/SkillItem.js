import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DeleteBtn from "../DeleteBtn"

const SkillItem = props => {
  const [showDeleteBtn, setShowDeleteButton] = useState(false);
    
  const displayRating = rating => {
    let bubbles = [...Array(rating).keys()];
    
    return bubbles.map((n, index) => {
      return <li key={index} className="bubble"><FontAwesomeIcon icon="circle" /></li>
    });
  }

  const handleMouseEnter = () => {
    setShowDeleteButton(true);
  }

  const handleMouseLeave = () => {
    setShowDeleteButton(false);
  }

  const handleDeleteSkillClick = () => {
    props.deleteSkill(props.skill.id)
  }

  const { skill } = props
    
  return (
    <div className="skill" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="skill-title">
        <h3>{skill.title}</h3>
        {showDeleteBtn &&
          <DeleteBtn handleClick={handleDeleteSkillClick}/>
        }  
      </div>  
      <ul className="rating">
        {displayRating(skill.rating)}
      </ul>
    </div>
  )
}

export default SkillItem;