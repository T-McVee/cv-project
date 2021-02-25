import React, { useState } from 'react'
import DeleteBtn from "../DeleteBtn"

const Entry = props => {
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  
  const handleMouseEnter = () => {
    setShowDeleteButton(true);
  }

  const handleMouseLeave = () => {
    setShowDeleteButton(false);
  }

  const handleDeleteEntryClick = () => {
    props.deleteEntry(props.entry.id)
  }
  
  
  const { entry } = props
  return (
    <div 
      className="entry" 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <div className="row">
        <div className="col col-date">{entry.from || entry.edFrom} - {entry.to || entry.edTo}</div>
        <div className="col col-details">
          <div className="position">{entry.title || entry.cert}</div>
          <div className="company">{entry.place || entry.school}</div>
          <div className="description">{entry.description}</div>
          {showDeleteButton && 
            <div className="delete">
              <DeleteBtn handleClick={handleDeleteEntryClick}/>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Entry;
