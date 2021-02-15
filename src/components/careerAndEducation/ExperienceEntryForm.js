import React, { Component } from 'react'
import InputBlock from '../InputBlock'
import TextBlock from '../TextBlock'
import Button from '../Button'

export default class ExperienceEntryForm extends Component {
  render() {
    const { handleChange, handleSubmit  } = this.props;

    return (
      <form>
        <InputBlock 
          name="Position" 
          id="title" 
          placeholder="Position title..." 
          onChange={handleChange}
        />
        <InputBlock 
          name="Company" 
          id="place" 
          placeholder="Company name..."
          onChange={handleChange}
        />
        <TextBlock 
          name="Description" 
          id="description"
          placeholder="Describe the position..." 
          onChange={handleChange}
        />
        <InputBlock 
          name="From" 
          id="from" 
          placeholder="Date you started..."
          onChange={handleChange}
        />
        <InputBlock 
          name="To" 
          id="to" 
          placeholder="Date you left..."
          onChange={handleChange}
        />
        <Button btnText="Add Position" onClick={handleSubmit}/>
      </form>
    )
  }
}
