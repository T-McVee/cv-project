import React, { Component } from 'react';
import '../../styles/personal.css'
import InputBlock from '../InputBlock'
import DisplayBlock from '../DisplayBlock'
import Button from '../Button'
import ContactMethod from './ContactMethod';


class Personal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: 'Tim',
      lastName: 'McVinish',
      profession: 'Marketer & Front End Dev',
      phone: '123-123-1234',
      email: 'iam@tmcvee.com',
      address: 'Kelowna, BC, Canada',
      github: 'www.iam@tmcvee.com',
      editMode: true,
      showEditButton: false,
    }

    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
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

  onMouseEnter() {
    this.setState({
      showEditButton: true
    })
  }
  
  onMouseLeave() {
    this.setState({
      showEditButton: false
    })
  }

  render() {
    
    return (
      <section 
        className="personal section" 
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        {this.state.editMode ?

          // Edit mode content
          <form>
            <div className="row">
              <div className="col">
                <InputBlock
                  id="firstName"
                  name="First Name"
                  type="text"
                  placeholder="First Name..."
                  onChange={this.handleChange}
                  value={this.state.firstName}
                />
              </div>
              <div className="col">
                <InputBlock
                  id="lastName"
                  name="Last Name"
                  type="text"
                  placeholder="Last Name..."
                  onChange={this.handleChange}
                  value={this.state.lastName}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <InputBlock
                  id="phone"
                  name="Phone Number"
                  type="text"
                  placeholder="Phone number..."
                  onChange={this.handleChange}
                  value={this.state.phone}
                />
              </div>
              <div className="col">
                <InputBlock 
                  id="email"
                  name="Email"
                  type="email"
                  placeholder="Email..."
                  onChange={this.handleChange}
                  value={this.state.email}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <InputBlock
                  id="address"
                  name="Address"
                  type="text"
                  placeholder="Address..."
                  onChange={this.handleChange}
                  value={this.state.address}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <InputBlock
                  id="profession"
                  name="Profession"
                  type="text"
                  placeholder="Profession..."
                  onChange={this.handleChange}
                  value={this.state.profession}
                />
              </div>
            </div>
            <div className="row r-align">
              <div className="col r-align">
                <Button btnText="Save Section" onClick={this.toggleEdit}/>
              </div>
            </div>
          </form>
          :

          // Display mode content
          <>
            <div className="row">
              <div className="col title-block">
                <DisplayBlock 
                  content={`${this.state.firstName}  ${this.state.lastName}`}
                />
                <DisplayBlock 
                  content={this.state.profession} 
                />
              </div>
              <div className="col contact-details">
                <ContactMethod 
                  icon={["fab", "github"]}
                  content={`${this.state.github}`}
                  label="Portfolio"
                />
                <ContactMethod 
                  icon="at"
                  content={`${this.state.email}`}
                  label="Email"
                />
                <ContactMethod 
                  icon="phone-alt"
                  content={`${this.state.phone}`}
                  label="Phone"
                />
              </div>
            </div>
            <div className="row r-align">
              <div className="col r-align bottom">
                {this.state.showEditButton ? 
                  <Button 
                    btnText="Edit Section" 
                    onClick={this.toggleEdit} 
                    className="hide"
                  />
                  : null
                }
              </div>
            </div>
          </>
        }
      </section>
    )
  }
}

export default Personal