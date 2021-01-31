import React, { Component } from 'react';
import '../styles/personal.css'
import InputBlock from './InputBlock'
import Button from './Button'


class Personal extends Component {
  
  
  render() {
    const { id, name, placeholder } = this.props;

    return (
      <section className="personal section">
        <form>
          <div className="row">
            <div className="col">
              <InputBlock
                id="firstName"
                name="First Name"
                placeholder="First Name..."
              />
            </div>
            <div className="col">
              <InputBlock
                id="lastName"
                name="Last Name"
                placeholder="Last Name..."
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <InputBlock
                id="phoneNumber"
                name="Phone Number"
                placeholder="Phone number..."
              />
            </div>
            <div className="col">
              <InputBlock 
                id="email"
                name="Email"
                placeholder="Email..."
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <InputBlock
                id="adress"
                name="Address"
                placeholder="Address..."
              />
            </div>
          </div>
          <div className="row r-align">
            <div className="col r-align">
              <Button btnText="Save Section"/>
            </div>
          </div>
        </form>
      </section>
    )
  }
}

export default Personal