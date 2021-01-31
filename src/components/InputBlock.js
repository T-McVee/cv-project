import React, { Component } from 'react';
import Button from './Button'
import '../styles/input-block.css'

class InputBlock extends Component {
  
  
  render() {
    const { id, name, type, placeholder } = this.props;

    return (
      <div className="input-block">
        <label htmlFor={id}>{name}:</label>
        <input type={type} id={id} name={name} placeholder={placeholder}/>
      </div>
    )
  }
}

export default InputBlock