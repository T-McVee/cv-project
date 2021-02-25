import React, { useState } from 'react'
import '../../styles/career.css'
import ExperianceOverview from './ExperienceOverView'
import ExperienceEntryForm from './ExperienceEntryForm'
import uuid from 'react-uuid'


const ExperienceSection = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [title, setTitle] = useState('');
  const [place, setPlace] = useState('');
  const [description, setDescription] = useState('');
  const [entries, setEntries] = useState([]);
  const [showAddButton, setShowAddButton] = useState(false);
  const [showExperienceEntryForm, setShowExperienceEntryForm] = useState(false);

  const determineKey = (id) => {
    if (id === 'from') {
      return setFrom
    } else if (id === 'to') {
      return setTo
    } else if (id === 'title') {
      return setTitle
    } else if (id === 'place') {
      return setPlace
    } else if (id === 'description') {
      return setDescription
    } else if (id === 'entries') {
      return setEntries
    } else if (id === 'showAddButton') {
      return setShowAddButton
    } else if (id === 'showExperienceEntryForm') {
      return setShowExperienceEntryForm
    }
  }

  const handleChange = (e) => {
    const { id, value } = e.target;
    const updateValue = determineKey(id);

    updateValue(value);
  }

  const resetState = () => {
    setFrom('');
    setTo('');
    setTitle('');
    setPlace('');
    setDescription('');
    setShowExperienceEntryForm(false);
    setShowAddButton(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      id: uuid(),
      from: from,
      to: to,
      title: title,
      place: place,
      description: description,
    }
    
    setEntries(entries.concat(newEntry));
    resetState();
  }

  const handleAddExperienceClick = (e) => {
    e.preventDefault();
    
    setShowExperienceEntryForm(true);
  }

  const hanldeDeleteExperienceClick = (id) => {
    const exp = [...entries];
    const newExp = exp.filter(entry => entry.id !== id);

    setEntries(newExp);
  }

  const handleMouseEnter = () => {
    setShowAddButton(true);
  }

  const handleMouseLeave = () => {
    setShowAddButton(false);
  }

  return (
    <section 
      className="career section" 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2>Experience</h2>
      {entries.length === 0 ? (
        <div>
          <ExperienceEntryForm 
            handleChange={handleChange} 
            handleSubmit={handleSubmit}
          />
        </div>
      ) : (
        <ExperianceOverview 
          entries={entries}
          showAddButton={showAddButton}
          showExperienceEntryForm={showExperienceEntryForm}
          handleAddExperienceClick={handleAddExperienceClick}
          deleteEntry={hanldeDeleteExperienceClick}
          handleChange={handleChange} 
          handleSubmit={handleSubmit}
        />
      )}
    </section>
  )
}

export default ExperienceSection;
