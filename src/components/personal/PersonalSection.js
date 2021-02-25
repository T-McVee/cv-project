import React, { useState } from 'react';
import '../../styles/personal.css'
import InputBlock from '../InputBlock'
import DisplayBlock from '../DisplayBlock'
import Button from '../Button'
import ContactMethod from './ContactMethod';


const Personal = props => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [profession, setProfession] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [github, setGithub] = useState('');
  const [editMode, setEditMode] = useState(true);
  const [showEditButton, setShowEditButton] = useState(false);

   
  // Toggle sections UI between edit / display
  const toggleEdit = (e) => {
    e.preventDefault();
    setEditMode(!editMode)
  }

  const determineKey = (id) => {
    if (id === 'firstName') {
      return setFirstName
    } else if (id === 'lastName') {
      return setLastName
    } else if (id === 'profession') {
      return setProfession
    } else if (id === 'phone') {
      return setPhone
    } else if (id === 'email') {
      return setEmail
    } else if (id === 'address') {
      return setAddress
    } else if (id === 'github') {
      return setGithub
    } else if (id === 'editMode') {
      return setEditMode
    } else {
      return setShowEditButton
    }
  }

  const handleChange = (e) => {
    const { id, value } = e.target;
    const updateValue = determineKey(id);

    updateValue(value);
  }

  const onMouseEnter = () => {
    setShowEditButton(true);
  }
  
  const onMouseLeave = () => {
    setShowEditButton(false);
  }

  
    
  return (
    <section 
      className="personal section" 
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {editMode ?

        // Edit mode content
        <form>
          <div className="row">
            <div className="col">
              <InputBlock
                id="firstName"
                name="First Name"
                type="text"
                placeholder="First Name..."
                onChange={handleChange}
                value={firstName}
              />
            </div>
            <div className="col">
              <InputBlock
                id="lastName"
                name="Last Name"
                type="text"
                placeholder="Last Name..."
                onChange={handleChange}
                value={lastName}
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
                onChange={handleChange}
                value={phone}
              />
            </div>
            <div className="col">
              <InputBlock 
                id="email"
                name="Email"
                type="email"
                placeholder="Email..."
                onChange={handleChange}
                value={email}
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
                onChange={handleChange}
                value={address}
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
                onChange={handleChange}
                value={profession}
              />
            </div>
          </div>
          <div className="row r-align">
            <div className="col r-align">
              <Button btnText="Save Section" onClick={toggleEdit}/>
            </div>
          </div>
        </form>
        :

        // Display mode content
        <>
          <div className="row">
            <div className="col title-block">
              <DisplayBlock 
                content={`${firstName}  ${lastName}`}
              />
              <DisplayBlock 
                content={profession} 
              />
            </div>
            <div className="col contact-details">
              <ContactMethod 
                icon={["fab", "github"]}
                content={`${github}`}
                label="Portfolio"
              />
              <ContactMethod 
                icon="at"
                content={`${email}`}
                label="Email"
              />
              <ContactMethod 
                icon="phone-alt"
                content={`${phone}`}
                label="Phone"
              />
            </div>
          </div>
          <div className="row r-align">
            <div className="col r-align bottom">
              {showEditButton ? 
                <Button 
                  btnText="Edit Section" 
                  onClick={toggleEdit} 
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

export default Personal