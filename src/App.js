import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faAt, faPhoneAlt, faCircle, faTimes } from '@fortawesome/free-solid-svg-icons'
import './styles/app.css'
import PersonalSection from './components/PersonalSection'
import SkillsSection from './components/skills/SkillsSection'
import CareerSection from './components/careerAndEducation/CareerSection'
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
          <div>Misc</div>
        </div>
        <div className="col col-main">
          <CareerSection />
          <EducationSection />
        </div>
        </div>
      </div>
    );
  }
}

export default App;
