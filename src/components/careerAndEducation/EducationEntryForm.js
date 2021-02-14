import React, { Component } from 'react'
import InputBlock from '../InputBlock'
import TextBlock from '../TextBlock'
import Button from '../Button'

export default class EducationEntryForm extends Component {
  render() {
    const { handleChange, handleSubmit  } = this.props;

    return (
      <form>
        <InputBlock name="Certification" id="cert" onChange={handleChange}/>
        <InputBlock name="School" id="school" onChange={handleChange}/>
        <TextBlock name="Description" id="description" onChange={handleChange}/>
        <InputBlock name="From" id="from" onChange={handleChange}/>
        <InputBlock name="To" id="to" onChange={handleChange}/>
        <Button btnText="Add Education" onClick={handleSubmit}/>
      </form>
    )
  }
}
