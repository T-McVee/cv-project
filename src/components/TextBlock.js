import React, { Component } from 'react';
import '../styles/input-block.css'

class InputBlock extends Component {
  
  render() {
    const { id, name, placeholder, value, onChange } = this.props;

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
}

export default InputBlock