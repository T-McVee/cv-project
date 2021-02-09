import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DeleteBtn from "../DeleteBtn";

export default class SkillItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showDeleteBtn: true,
    }
    
    this.displayRating = this.displayRating.bind(this);
    this.handleDeleteSkillClick = this.handleDeleteSkillClick.bind(this)
  }
  

  displayRating(rating) {
    let bubbles = [...Array(rating).keys()];
    
   return bubbles.map((n, index) => {
      return <li key={index} className="bubble"><FontAwesomeIcon icon="circle" /></li>
    });
  }

  handleDeleteSkillClick() {
    this.props.deleteSkill(this.props.skill.id)
  }

  render() {
    const { skill } = this.props
    
    return (
      <div className="skill">
        <div className="skill-title">
          <h3>{skill.title}</h3>
          {!this.state.showDeleteBtn &&
            <DeleteBtn handleDeleteSkill={this.handleDeleteSkillClick}/>
          }  
        </div>  
        <ul className="rating">
          {this.displayRating(skill.rating)}
        </ul>
        
      </div>
    )
  }
}
