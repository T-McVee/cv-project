import Entry from './Entry'
import Button from '../Button'
import EducationEntryForm from './EducationEntryForm';

const EducationOverview = props => {
  const { 
    entries, 
    showAddButton, 
    showEducationEntryForm, 
    handleAddEducationClick,
    deleteEntry,
    handleChange,
    handleSubmit,  
  } = props;

  return (
    <div className="experience-overview">
        {entries.map(entry => {
          return <Entry key={entry.id} entry={entry} deleteEntry={deleteEntry}/>
        })}

        {showEducationEntryForm && 
          <EducationEntryForm 
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        }
        {showAddButton && !showEducationEntryForm &&
          <Button 
            btnText="+ New Education"
            onClick={handleAddEducationClick}
          />
        }
    </div>
  )
}

export default EducationOverview;