import React, { useState } from 'react'
import '../../styles/career.css'
import EducationOverview from './EducationOverview'
import EducationEntryForm from './EducationEntryForm'
import ErrorBoundary from '../ErrorBoundary'
import uuid from 'react-uuid'
import { faGalacticSenate } from '@fortawesome/free-brands-svg-icons'

const EducationSection = props => {
  const [edFrom, setEdFrom] = useState('');  
  const [edTo, setEdTo] = useState('');  
  const [cert, setCert] = useState('');  
  const [school, setSchool] = useState('');  
  const [description, setDescription] = useState('');  
  const [entries, setEntries] = useState([]);  
  const [showAddButton, setShowAddButton] = useState(false);
  const [showEducationEntryForm, setShowEducationEntryForm] = useState(false)
  
  const determineKey = (id) => {
    if (id === 'edFrom') {
      return setEdFrom
    } else if (id === 'edTo') {
      return setEdTo
    } else if (id === 'cert') {
      return setCert
    } else if (id === 'school') {
      return setSchool
    } else if (id === 'description') {
      return setDescription
    } else if (id === 'entries') {
      return setEntries
    } else if (id === 'showAddButton') {
      return setShowAddButton
    } else if (id === 'showEducationEntryForm') {
      return setShowEducationEntryForm
    }
  }

  const handleChange = (e) => {
    const { id, value } = e.target;
    const updateValue = determineKey(id);

    updateValue(value);
  }

  const resetState = () => {
    setEdFrom('');
    setEdTo('');
    setCert('');
    setSchool('');
    setDescription('');
    setShowEducationEntryForm(false);
    setShowAddButton(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEntry = {
      id: uuid(),
      from: edFrom,
      to: edTo,
      cert: cert,
      school: school,
      description: description,
    }
    
    setEntries(entries.concat(newEntry));
    resetState();
  }

  const handleAddEducationClick = (e) => {
    e.preventDefault();

    setShowEducationEntryForm(true);
  }

  const hanldeDeleteEducationClick = (id) => {
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
      <h2>Education</h2>
      <ErrorBoundary>
        {entries.length === 0 ? (
          <div>
            <EducationEntryForm 
              handleChange={handleChange} 
              handleSubmit={handleSubmit}
            />
          </div>
        ) : (
          <EducationOverview 
            entries={entries}
            showAddButton={showAddButton}
            showEducationEntryForm={showEducationEntryForm}
            handleAddEducationClick={handleAddEducationClick}
            deleteEntry={hanldeDeleteEducationClick}
            handleChange={handleChange} 
            handleSubmit={handleSubmit}
          />
        )}
      </ErrorBoundary>
    </section>
  )
}


export default EducationSection;