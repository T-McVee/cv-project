import React, { Component } from 'react';

class DisplayBlock extends Component {
 
  render() {
    const {content} = this.props;

    return (
      <p>{content}</p>
    )
  }
}

export default DisplayBlock