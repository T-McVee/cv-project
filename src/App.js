import React, { Component } from 'react';
import './styles/app.css'
import Personal from './components/Personal'

class App extends Component {
 
  render() {
    return (
      <div className="app">
        <Personal />
        <div>Career</div>
        <div>Education</div>
        <div>References</div>
      </div>
    );
  }
}

export default App;
