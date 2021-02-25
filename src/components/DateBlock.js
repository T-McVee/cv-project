import React, { useEffect } from 'react'
import datepicker from 'js-datepicker'
import { format } from 'date-fns'
import '../styles/dateBlock.css'


const DateBlock = (props) => {
  const { id, label, placeholder, onChange } = props;

  useEffect(() => {
    const target = `#${id}`;
    const picker = datepicker(target, { 
      
      formatter: (input, date) => {
        const value = format(date, 'MMM yyyy');
        input.value = value;
      },

      onSelect: (instance, date) => {
        const e = {
          target: {
            id: id,
            value: format(date, "MMM yyyy"),
          }
        }

        return onChange(e);
      }

     });

    return () => {}
  }, []);

  return (
    <div className="date-block">
      {label &&
        <label htmlFor={id}>{label}:</label>
      }
      <input 
        type="text" 
        className="date" 
        id={id}
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
      />
    </div>
  )
}

export default DateBlock;
