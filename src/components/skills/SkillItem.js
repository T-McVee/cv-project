import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DeleteBtn from "../DeleteBtn"

export default class SkillItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showDeleteBtn: false,
    }
    
    this.displayRating = this.displayRating.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleDeleteSkillClick = this.handleDeleteSkillClick.bind(this)
  }
  

  displayRating(rating) {
    let bubbles = [...Array(rating).keys()];
    
    return bubbles.map((n, index) => {
      return <li key={index} className="bubble"><FontAwesomeIcon icon="circle" /></li>
    });
  }

  handleMouseEnter() {
    this.setState({
      showDeleteBtn: true,
    })
  }

  handleMouseLeave() {
    this.setState({
      showDeleteBtn: false,
    })
  }

  handleDeleteSkillClick() {
    this.props.deleteSkill(this.props.skill.id)
  }

  render() {
    const { skill } = this.props
    
    return (
      <div className="skill" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        <div className="skill-title">
          <h3>{skill.title}</h3>
          {this.state.showDeleteBtn &&
            <DeleteBtn handleClick={this.handleDeleteSkillClick}/>
          }  
        </div>  
        <ul className="rating">
          {this.displayRating(skill.rating)}
        </ul>
        
      </div>
    )
  }
}
