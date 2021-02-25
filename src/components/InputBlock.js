import '../styles/input-block.css'

const InputBlock = (props) => {
  const { id, name, type, minLength, placeholder, value, onChange, focus } = props;

  return (
    <div className="input-block">
      <label htmlFor={id}>{name}:</label>
      {focus ? (
        <input 
          type={type} 
          id={id} 
          name={name} 
          minLength={minLength}
          placeholder={placeholder}
          onChange={(e) => onChange(e)}
          value={value}
          autoFocus
        />
      ) : (
        <input 
          type={type} 
          id={id} 
          name={name} 
          minLength={minLength}
          placeholder={placeholder}
          onChange={(e) => onChange(e)}
          value={value}
        />
      )}
    </div>
  )
}

export default InputBlock