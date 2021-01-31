import React, { Component } from 'react';
import '../styles/button.css'

class Button extends Component {
  render() {
    const { btnText } = this.props
    
    return (
      <button className="btn" type="submit">{btnText}</button>
    )
  }
}

export default Button