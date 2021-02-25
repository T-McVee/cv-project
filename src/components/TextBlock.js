import '../styles/input-block.css'

const InputBlock = (props) => {
  const { id, name, placeholder, value, onChange } = props;

  return (
    <div className="text-block">
      <label htmlFor={id}>{name}:</label>
      <textarea
      id={id} 
      name={name} 
      placeholder={placeholder}
      onChange={(e) => onChange(e)}
      value={value}
      />
    </div>
  )
}

export default InputBlock