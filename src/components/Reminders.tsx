import React from 'react'
import {Inject,ScheduleComponent,Day,Week,Month,EventSettingsModel} from '@syncfusion/ej2-react-schedule';
import './styles/Calendar.css';
import meetings from '../db.js';

class Reminders extends React.Component{
  render(): React.ReactNode {
      return(
        <div>
          {meetings.map((item,idx)=>{
            return(
              <div>
                <p>{item.Subject}</p>
              </div>
            )
          })}
        </div>
      )
  }
}

export default Reminders