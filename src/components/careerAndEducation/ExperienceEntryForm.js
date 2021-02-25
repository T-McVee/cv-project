import DateBlock from '../DateBlock'
import InputBlock from '../InputBlock'
import TextBlock from '../TextBlock'
import Button from '../Button'

const ExperienceEntryForm = props => {
  const { handleChange, handleSubmit  } = props;

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
        <DateBlock 
          name="From" 
          id="from" 
          label="From"
          placeholder="Date you started..."
          onChange={handleChange}
        />
        <DateBlock 
          name="To" 
          id="to"
          label="To" 
          placeholder="Date you left..."
          onChange={handleChange}
        />
        <Button btnText="Add Position" onClick={handleSubmit}/>
      </form>
    )
  }

  export default ExperienceEntryForm;
