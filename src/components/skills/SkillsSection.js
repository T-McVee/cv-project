import React, { Component } from 'react'
import '../../styles/skills.css'
import SkillAdd from './SkillAdd'
import SkillsOverview from './SkillsOverview'


export default class Skills extends Component {
  constructor(props) {
    super(props)
    this.state = {
        skill: '',
        rating: '7',
        skills: [],
        editMode: false,
        showAddButton: false,
        showAddSkill: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddSkillClick = this.handleAddSkillClick.bind(this);
    this.deleteSkill = this.deleteSkill.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleChange(e) {
    const { id, value } = e.target;
    this.setState({
      [id]: value
    })
    console.log(this.state);
  }

  handleSubmit(e) {
    e.preventDefault();

    const newSkills = {
      id: Date.now(),
      title: this.state.skill,
      rating: Number(this.state.rating),
    };

    this.setState({
      skills: this.state.skills.concat(newSkills),
      skill: '',
      rating: '7',
      showAddSkill: false,
    });
    console.log(this.state);
  }

  handleAddSkillClick(e) {
    e.preventDefault();

    this.setState({
      showAddSkill: true,
    })
  }

  deleteSkill(id) {
    const skills = [...this.state.skills]
    const newSkills = skills.filter(skill => skill.id !== id)

    this.setState({
      skills: newSkills,
    })
  }

  handleMouseEnter() {
    this.setState({
      showAddButton: true,
    })
  }

  handleMouseLeave() {
    this.setState({
      showAddButton: false,
    })
  }
  
  render() {

    return (
      <section className="skills section" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        <h2>Skills</h2>
        {this.state.skills.length === 0 ? (
          <SkillAdd 
            handleChange={this.handleChange} 
            handleSubmit={this.handleSubmit}
          />
          ) : (
          <SkillsOverview 
            skills={this.state.skills} 
            showButton={this.state.showAddButton}
            showAddSkill={this.state.showAddSkill}
            handleAddSkillClick={this.handleAddSkillClick}
            deleteSkill={this.deleteSkill}
            handleChange={this.handleChange} 
            handleSubmit={this.handleSubmit} 
          />
          )
        }
      </section>
    )
  }
}