import React from 'react'
import { Inject,ScheduleComponent,Day,Week,Month,ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { L10n } from '@syncfusion/ej2-base';


import './styles/Calendar.css';

L10n.load({
  'en-US': {
    'schedule':{
      'saveButton': 'Done',
      'cancelButton': 'Cancel',
      'closeButton': 'Cancel',
      'newEvent': 'New Appointment'
    }
  }
})


export default class Calendar extends React.Component<{},{}>{


  private eventTemplate(props: { [key: string]: Object}):JSX.Element {
    return (<div className='template-wrap'></div>)
  }


  private editorWindowTemplate(props: any): JSX.Element{
    return(
      <table>
        <tbody>
          <tr>
            <td>Summary</td>
            <td><input id='subject' name='subject' type="text"/></td>
          </tr>
          <tr>
            <td>Status</td>
            <td>
              <DropDownListComponent id='EventType' dataSource={['New','Requested','Confirmed']}
              placeholder="Choose status" data-name='EventType' value={props.EventType || null}>
              </DropDownListComponent>
            </td>
          </tr>
          <tr>
            <td>From</td>
            <td>
              <DateTimePickerComponent id='StartTime' data-name='StartTime'>
              </DateTimePickerComponent>
            </td>
          </tr>
          <tr>
            <td>To</td>
            <td>
              <DateTimePickerComponent id='EndTime' data-name='EndTime'>
              </DateTimePickerComponent>
            </td>
          </tr>
          <tr>
            <td>Recent</td>
            <td><textarea></textarea></td>
          </tr>
        </tbody>
      </table>
    )
  }
  public render(){
    return (
      <ScheduleComponent
       currentView='Week' 
       style={{height:'100%'}}
       editorTemplate={this.editorWindowTemplate.bind(this)}
       >
        <ViewsDirective>
          <ViewDirective option='Day' startHour='07:00' endHour='23:59'></ViewDirective>
          <ViewDirective option='Week' startHour='07:00' endHour='23:59'></ViewDirective>
          <ViewDirective option='Month' startHour='07:00' endHour='23:59'></ViewDirective>
        </ViewsDirective>
        <Inject services={[Day, Week, Month]} />
      </ScheduleComponent>
    )
}
}

