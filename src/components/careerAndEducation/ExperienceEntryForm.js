import React, { Component } from 'react'
import InputBlock from '../InputBlock'
import TextBlock from '../TextBlock'
import Button from '../Button'

export default class ExperienceEntryForm extends Component {
  render() {
    const { handleChange, handleSubmit  } = this.props;

    return (
      <form>
        <InputBlock name="Position" id="position" onChange={handleChange}/>
        <InputBlock name="Company" id="company" onChange={handleChange}/>
        <TextBlock name="Description" id="description" onChange={handleChange}/>
        <InputBlock name="From" id="from" onChange={handleChange}/>
        <InputBlock name="To" id="to" onChange={handleChange}/>
        <Button btnText="Add Position" onClick={handleSubmit}/>
      </form>
    )
  }
}
