import InputBlock from '../InputBlock'

const SkillAdd = props => {
  
  const isValid = (e) => {
    e.preventDefault();
    const input = e.target.skill;

    if (!input.value) return input.style.borderColor = "red";
    props.handleSubmit(e);
  }
  
  const { handleChange } = props;

  return (
    <form className="skill-add" onSubmit={(e) => isValid(e)}>
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

export default SkillAdd;