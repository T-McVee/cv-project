import React, { Component } from 'react';
import '../styles/displayBlock.css'

class DisplayBlock extends Component {
 
  render() {
    const {content, classes, label} = this.props;

    return (
      <>
      {label && <span className="label">{label}</span>}
      <span className={classes}>{content}</span>
      </>
    )
  }
}

export default DisplayBlock