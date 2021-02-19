import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faAt, faPhoneAlt, faCircle, faTimes } from '@fortawesome/free-solid-svg-icons'
import './styles/app.css'
import PersonalSection from './components/personal/PersonalSection'
import SkillsSection from './components/skills/SkillsSection'
import ExperienceSection from './components/careerAndEducation/ExperienceSection'
import EducationSection from './components/careerAndEducation/EducationSection'

library.add(fab, faAt, faPhoneAlt, faCircle, faTimes)

class App extends Component {
 
  render() {
    return (
      <div className="app">
        <div className="row">
          <PersonalSection />   
        </div>
        <div className="row">
        <div className="col col-side">
          <SkillsSection />
        </div>
        <div className="col col-main">
          <ExperienceSection />
          <EducationSection />
        </div>
        </div>
      </div>
    );
  }
}

export default App;
