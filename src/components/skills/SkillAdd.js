import React, { Component } from 'react'
import InputBlock from '../InputBlock'
import Button from '../Button'

export default class SkillAdd extends Component {
  constructor(props) {
    super(props)
    this.state = {
      valid: false,
    }

    this.isValid = this.isValid.bind(this);
  }

  isValid(e) {
    e.preventDefault();
    const input = e.target.skill;

    if (!input.value) return input.style.borderColor = "red";
    this.props.handleSubmit(e);
  }
  
  render() {
    const { handleChange } = this.props;

    return (
      <form className="skill-add" onSubmit={(e) => this.isValid(e)}>
      <h3>List new skill:</h3>
      <div className="form-control">
        <InputBlock 
          id="skill"
          name="New skill"
          placeholder="Enter skill..."
          onChange={handleChange}
          focus={true}
          minLength={0}
        />
      </div>
      <div className="form-control">
        <input 
          type="range"
          id="rating"
          name="rating"
          min="0"
          max="7"
          step="1"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <button className="btn" type="submit">Add Skill</button>
    </form>
    )
  }
}
