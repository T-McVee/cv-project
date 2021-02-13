import React, { Component } from 'react'
import '../../styles/career.css'
import ExperianceOverview from './ExperienceOverView'
import ExperienceEntryForm from './ExperienceEntryForm'
import uuid from 'react-uuid'


export default class ExperienceSection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      from: '',
      to: '',
      position: '',
      company: '',
      description: '',
      entries: [],
      showAddEntry: false,
      showAddButton: false,
      showExperienceEntryForm: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddExperienceClick = this.handleAddExperienceClick.bind(this);
    this.hanldeDeleteExperienceClick = this.hanldeDeleteExperienceClick.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }
  
  handleChange(e) {
    const { id, value } = e.target;

    this.setState({
      [id]: value,
    })
    console.log(this.state[id]);
  }

  handleSubmit(e) {
    e.preventDefault();
    const newEntry = {
      id: uuid(),
      from: this.state.from,
      to: this.state.to,
      position: this.state.position,
      company: this.state.company,
      description: this.state.description,
    }
    
    this.setState({
      entries: this.state.entries.concat(newEntry),
      from: '',
      to: '',
      position: '',
      company: '',
      description: '',
      showExperienceEntryForm: false,
    })
  }

  handleAddExperienceClick(e) {
    e.preventDefault();
    
    this.setState({
      showExperienceEntryForm: true,
    })
  }

  hanldeDeleteExperienceClick(id) {

    const exp = [...this.state.entries];
    const newExp = exp.filter(entry => entry.id !== id);

    this.setState({
      entries: newExp,
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
      <section 
        className="career section" 
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <h2>Experience</h2>
        {this.state.entries.length === 0 ? (
          <div>
            <ExperienceEntryForm 
              handleChange={this.handleChange} 
              handleSubmit={this.handleSubmit}
            />
          </div>
        ) : (
          <ExperianceOverview 
            entries={this.state.entries}
            showAddButton={this.state.showAddButton}
            showExperienceEntryForm={this.state.showExperienceEntryForm}
            handleAddExperienceClick={this.handleAddExperienceClick}
            deleteEntry={this.hanldeDeleteExperienceClick}
            handleChange={this.handleChange} 
            handleSubmit={this.handleSubmit}
          />
        )}
        
      </section>
    )
  }
}
