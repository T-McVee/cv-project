import React, { Component } from 'react';
import '../styles/personal.css'
import InputBlock from './InputBlock'
import DisplayBlock from './DisplayBlock'
import Button from './Button'


class Personal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      address: '',
      editMode: false,
    }

    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // Toggle sections UI between edit / display
  toggleEdit(e) {
    e.preventDefault();
    
    this.setState({
      editMode: !this.state.editMode
    });
  }

  // Update state on input change
  handleChange(e) {
    const {id, value} = e.target
    
    this.setState({
      [id]: value
    });
  }

  render() {
    
    return (
      <section className="personal section">
        <form>
          <div className="row">
            <div className="col">
              {!this.state.editMode ? 
                <InputBlock
                  id="firstName"
                  name="First Name"
                  type="text"
                  placeholder="First Name..."
                  onChange={this.handleChange}
                  value={this.state.firstName}
                />
                : <DisplayBlock content={this.state.firstName}/>
              }
            </div>
            <div className="col">
              {!this.state.editMode ? 
                <InputBlock
                  id="lastName"
                  name="Last Name"
                  type="text"
                  placeholder="Last Name..."
                  onChange={this.handleChange}
                  value={this.state.lastName}
                />
                : <DisplayBlock content={this.state.lastName}/>
              }
            </div>
          </div>
          <div className="row">
            <div className="col">
              {!this.state.editMode ? 
                <InputBlock
                  id="phone"
                  name="Phone Number"
                  type="text"
                  placeholder="Phone number..."
                  onChange={this.handleChange}
                  value={this.state.phone}
                />
                : <DisplayBlock content={this.state.phone} />
              }
            </div>
            <div className="col">
              {!this.state.editMode ?
                <InputBlock 
                  id="email"
                  name="Email"
                  type="email"
                  placeholder="Email..."
                  onChange={this.handleChange}
                  value={this.state.email}
                />
                : <DisplayBlock content={this.state.email} />
              }
            </div>
          </div>
          <div className="row">
            <div className="col">
              {!this.state.editMode ?
                <InputBlock
                  id="address"
                  name="Address"
                  type="text"
                  placeholder="Address..."
                  onChange={this.handleChange}
                  value={this.state.address}
                />
                : <DisplayBlock content={this.state.address} />
              }
            </div>
          </div>
          <div className="row r-align">
            <div className="col r-align">
              {!this.state.editMode ?
                <Button btnText="Save Section" onClick={this.toggleEdit}/>
                : <Button btnText="Edit Section" onClick={this.toggleEdit}/>
              }
            </div>
          </div>
        </form>
      </section>
    )
  }
}

export default Personal