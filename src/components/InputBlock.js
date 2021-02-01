import React, { Component } from 'react';
import '../styles/input-block.css'

class InputBlock extends Component {
  
  render() {
    const { id, name, type, placeholder, value, onChange } = this.props;

    return (
      <div className="input-block">
        <label htmlFor={id}>{name}:</label>
        <input 
        type={type} 
        id={id} 
        name={name} 
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
        value={value}
        />
      </div>
    )
  }
}

export default InputBlock