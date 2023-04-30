import React from 'react'
import { Inject,ScheduleComponent,Day,Week,Month,ViewsDirective, ViewDirective , EventSettingsModel} from '@syncfusion/ej2-react-schedule';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { RadioButtonComponent, CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import { L10n } from '@syncfusion/ej2-base';
import { DataManager, WebApiAdaptor} from '@syncfusion/ej2-data';
import meetings from '../db';
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


export default class Calendar extends React.Component{
  private localData: EventSettingsModel = {
    dataSource: meetings,
  }
  private editorWindowTemplate(props: any): JSX.Element{
    return(
      <div className='window-container'>
        <div className='window-section'>
          <RadioButtonComponent label='Client Appointment' name='appointment' value='client'/>
          <RadioButtonComponent label='Other' name='appointment' value='other'/>
        </div>
        <div className='window-section'>
          <div className='window-dropdown'>
            <DropDownListComponent id='Subject' dataSource={['Brad Pitt','Adam Cohen','Angela Simpson']}
            placeholder="Search Client" data-name='Subject' value={props.EventType || null}></DropDownListComponent>
          </div>
          <button className='window-btn'>
            +New Client
          </button>
        </div>
        <div className='window-section'>
          <CheckBoxComponent label='All day' data-name='IsAllDay'/>
        </div>
        <div className='window-section' style={{flexDirection:"column"}}>
          <p style={{fontSize:"14px"}}>Start Time</p>
          <DateTimePickerComponent id='StartTime' data-name='StartTime'></DateTimePickerComponent>
        </div>
        <div className='window-section' style={{flexDirection:"column"}}>
          <p style={{fontSize:"14px"}}>End Time</p>
          <DateTimePickerComponent id='EndTime' data-name='EndTime'></DateTimePickerComponent>
        </div>
        <div className='window-section'>
          <DropDownListComponent id='Location' dataSource={['Telehealth: Video Office']} placeholder='Location: unassigned' data-name='Location'></DropDownListComponent>
        </div>
        <div className='window-section'>
          <CheckBoxComponent label='Repeat'></CheckBoxComponent>
        </div>
        {/* <div className="flyout-triangle" style={{position:"absolute",backgroundColor:"red",top: "182px"}}></div> */}
      </div>
    )
  }
  public render():JSX.Element{
    //console.log(meetings)
    return(
    <ScheduleComponent currentView='Month'
    editorTemplate={this.editorWindowTemplate.bind(this)}
    eventSettings={this.localData}
    showQuickInfo={false}
    quickInfoOnSelectionEnd={false}>
    
      <ViewsDirective>
          <ViewDirective option='Day' startHour='07:00' endHour='23:59'></ViewDirective>
          <ViewDirective option='Week' startHour='07:00' endHour='23:59'></ViewDirective>
          <ViewDirective option='Month' startHour='07:00' endHour='23:59'></ViewDirective>
        </ViewsDirective>
      <Inject services={[Day,Week,Month]}/>
    </ScheduleComponent>
  )}
}

