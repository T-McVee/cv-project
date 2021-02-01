import React, { Component } from 'react';
import '../styles/button.css'

class Button extends Component {
  render() {
    const { btnText, onClick } = this.props
    
    return (
      <button className="btn" type="submit" onClick={(e) => onClick(e)}>{btnText}</button>
    )
  }
}

export default Button