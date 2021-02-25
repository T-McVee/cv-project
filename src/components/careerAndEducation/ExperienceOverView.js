import Entry from './Entry'
import Button from '../Button'
import ExperienceEntryForm from './ExperienceEntryForm';

const ExperienceOverView = props => {
  const { 
    entries, 
    showAddButton, 
    showExperienceEntryForm, 
    handleAddExperienceClick,
    deleteEntry,
    handleChange,
    handleSubmit,  
  } = props;

  return (
    <div className="experience-overview">
        {entries.map(entry => 
          <Entry key={entry.id} entry={entry} deleteEntry={deleteEntry}/>
        )}

        {showExperienceEntryForm && 
          <ExperienceEntryForm 
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        }
        {showAddButton && !showExperienceEntryForm &&
          <Button 
            btnText="+ New Experience"
            onClick={handleAddExperienceClick}
          />
        }
    </div>
  )
}

export default ExperienceOverView;
