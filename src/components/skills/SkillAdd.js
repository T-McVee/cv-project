import React, { Component } from 'react'

export default class SkillAdd extends Component {
  render() {
    const { handleChange, handleSubmit } = this.props;

    return (
      <form onSubmit={(e) => handleSubmit(e)} className="skill-add">
      <h3>List new skill:</h3>
      <div className="form-control">
        <label htmlFor="skill">New skill:</label>
        <input 
          type="text"
          id="skill"
          name="skill"
          placeholder="Enter skill..."
          onChange={(e) => handleChange(e)}
          autoFocus
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
      <button type="submit" className="btn">Add Skill</button>
    </form>
    )
  }
}
