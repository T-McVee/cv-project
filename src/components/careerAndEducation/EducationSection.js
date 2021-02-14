import React, { Component } from 'react'
import '../../styles/career.css'
import EducationOverview from './EducationOverview'
import EducationEntryForm from './EducationEntryForm'
import uuid from 'react-uuid'
import { faGalacticSenate } from '@fortawesome/free-brands-svg-icons'

export default class EducationSection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      from: '',
      to: '',
      title: '',
      place: '',
      description: '',
      entries: [
        {
          id: '1231',
          from: '2010',
          to: '2012',
          title: 'Masters of Business',
          place: 'Queensland University of Technology',
          description: 'Majored in marketing with a keen interest in digital platforms and their changing of our world and communications.',
        }
      ],
      showAddEntry: false,
      showAddButton: false,
      showEducationEntryForm: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddEducationClick = this.handleAddEducationClick.bind(this);
    this.hanldeDeleteEducationClick = this.hanldeDeleteEducationClick.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleChange(e) {
    const { id, value } = e.target;

    this.setState({
      [id]: value,
    })
  }

  handleSubmit(e) {
    e.preventDefault();

    const newEntry = {
      id: uuid(),
      from: this.state.from,
      to: this.state.to,
      cert: this.state.cert,
      school: this.state.school,
      description: this.state.description,
    }
    
    this.setState({
      entries: this.state.entries.concat(newEntry),
      from: '',
      to: '',
      cert: '',
      school: '',
      description: '',
      showEducationEntryForm: false,
      showAddButton: false,
    })
  }

  handleAddEducationClick(e) {
    e.preventDefault();

    this.setState({
      showEducationEntryForm: true,
    })
  }

  hanldeDeleteEducationClick(id) {
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
        <h2>Education</h2>
        {this.state.entries.length === 0 ? (
          <div>
            <EducationEntryForm 
              handleChange={this.handleChange} 
              handleSubmit={this.handleSubmit}
            />
          </div>
        ) : (
          <EducationOverview 
            entries={this.state.entries}
            showAddButton={this.state.showAddButton}
            showEducationEntryForm={this.state.showEducationEntryForm}
            handleAddEducationClick={this.handleAddEducationClick}
            deleteEntry={this.hanldeDeleteEducationClick}
            handleChange={this.handleChange} 
            handleSubmit={this.handleSubmit}
          />
        )}
      </section>
    )
  }
}
