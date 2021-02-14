import React, { Component } from 'react'
import InputBlock from '../InputBlock'
import Button from '../Button'

export default class SkillAdd extends Component {
  render() {
    const { handleChange, handleSubmit } = this.props;

    return (
      <form onSubmit={(e) => handleSubmit(e)} className="skill-add">
      <h3>List new skill:</h3>
      <div className="form-control">
        <InputBlock 
          id="skill"
          name="New skill"
          placeholder="Enter skill..."
          onChange={handleChange}
          focus={true}
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
      <Button btnText="Add Skill" onClick={handleSubmit} />
    </form>
    )
  }
}
