import React, { Component } from 'react'
import '../../styles/career.css'
import ExperianceOverview from './ExperienceOverView'
import ExperienceEntryForm from './ExperienceEntryForm'


export default class ExperienceSection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      from: '',
      to: '',
      position: '',
      company: '',
      description: '',
      entries: [
        {
          from: 'Sep',
          to: 'Dec',
          position: 'Gas Man',
          company: 'GasCorp',
          description: 'Pumpin gas baby... Natural gas',
        },
        {
          from: 'Sep',
          to: 'Dec',
          position: 'Gas Man',
          company: 'GasCorp',
          description: 'Pumpin gas baby... Natural gas',
        },
      ],
      showAddEntry: false,
      showAddButton: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMouseEnter = this.handleMouseEnter(this);
    this.handleMouseLeave = this.handleMouseLeave(this);
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
    })
    
    console.log(this.state.entries)
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
          />
        )}
        
      </section>
    )
  }
}
