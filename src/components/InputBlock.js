import React, { Component } from 'react';
import '../styles/input-block.css'

class InputBlock extends Component {
  
  render() {
    const { id, name, type, minLength, placeholder, value, onChange, focus } = this.props;

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
}

export default InputBlock