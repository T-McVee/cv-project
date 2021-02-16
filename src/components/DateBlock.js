import React, { Component } from 'react'
import datepicker from 'js-datepicker'
import { format } from 'date-fns'
import '../styles/dateBlock.css'


export default class DateBlock extends Component {

  componentDidMount() {
    const target = `#${this.props.id}`;
    const picker = datepicker(target, { 
      formatter: (input, date, instance) => {
        const value = format(date, 'MMM yyyy');
        input.value = value;
      },

      onSelect: (instance, date) => {
        const e = {
          target: {
            id: this.props.id,
            // Use date-fns to format into mm/yyyy
            value: format(date, "MMM yyyy"),
          }
        }

        return this.props.onChange(e);
      }
     });
    
  }

  render() {
    const { id, label, placeholder, onChange } = this.props;
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
}

