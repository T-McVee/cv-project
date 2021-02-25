import InputBlock from '../InputBlock'
import TextBlock from '../TextBlock'
import DateBlock from '../DateBlock'
import Button from '../Button'

const EducationEntryForm = props => {
  const { handleChange, handleSubmit  } = props;

  return (
    <form>
      <InputBlock name="Certification" id="cert" onChange={handleChange}/>
      <InputBlock name="School" id="school" onChange={handleChange}/>
      <TextBlock name="Description" id="description" onChange={handleChange}/>
      <DateBlock 
        name="From" 
        id="edFrom" 
        label="From"
        placeholder="Date commenced..."
        onChange={handleChange}
      />
      <DateBlock 
        name="To" 
        id="edTo" 
        label="To"
        placeholder="Date graduated..."
        onChange={handleChange}
      />
      <Button btnText="Add Education" onClick={handleSubmit}/>
    </form>
  )
}

export default  EducationEntryForm;
