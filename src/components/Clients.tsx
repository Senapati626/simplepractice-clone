import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Chat from './assets/chat.png';
import Envelope from './assets/envelope.png';
import Telephone from './assets/telephone.png';
import './styles/Clients.css';


const Clients = () => {
  const [clients,setClients] = useState<any[]>([])

  useEffect(()=>{
    axios.get('http://localhost:3001/clients')
    .then((response)=>setClients(response.data))
  },[])
  if(clients.length===0){
    return(
      <div>
        <p>No Clients</p>
      </div>
    )
  } 
  return (
    <div className='clients-container'>
      <div className='clients-container-header'>
        <p>Clients and contacts</p>
        <p>Total clients: {clients.length}</p>
      </div>
      <div className='clients-container-util'>
        <div className='clients-search'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#707070" viewBox="0 0 16 16" className="icon-search"><path d="M11.433 6.889c0 2.748-2.159 4.889-4.716 4.889C4.159 11.778 2 9.637 2 6.888 2 4.142 4.16 2 6.717 2c2.557 0 4.716 2.14 4.716 4.889zm.716 4.052a6.976 6.976 0 001.284-4.052C13.433 3.084 10.426 0 6.717 0 3.007 0 0 3.084 0 6.889c0 3.804 3.007 6.889 6.717 6.889 1.52 0 2.923-.518 4.048-1.392l3.23 3.312a1 1 0 001.432-1.396l-3.278-3.361z" clip-rule="evenodd"></path></svg>
          <input type="text" name="search" id="" placeholder='Search'/>
        </div>
        <button className='clients-btn'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" fill="none" viewBox="0 0 18 12"><path fill="#707070" d="M6 7.5c-2.006 0-6 1.071-6 4.5h12c0-3.429-3.994-4.5-6-4.5zM6 6c1.654 0 3-1.346 3-3S7.654 0 6 0 3 1.346 3 3s1.346 3 3 3zm5.143 1.551c.994.72 2.571 1.663 2.571 4.449h3.429c0-3-3.892-4.217-6-4.449zm0-1.551c1.654 0 3-1.346 3-3s-1.346-3-3-3c-.463 0-.892.111-1.286.3.54.763.857 1.697.857 2.7a4.664 4.664 0 01-.857 2.7c.394.189.823.3 1.286.3z"></path></svg>
          Clients
        </button>
      </div>
      <div className='clients-table'>
        <div className='clients-table-row'>
          <div><p style={{color:"#708693",fontSize:"12px"}}>Name</p></div>
          <div>&nbsp;</div>
          <div><p style={{color:"#708693",fontSize:"12px"}}>Contact info</p></div>
          <div><p style={{color:"#708693",fontSize:"12px"}}>Relationship</p></div>
          <div>&nbsp;</div>
        </div>
        {clients.map((client,idx)=>{
          return(
            <div className='clients-table-row' key={idx}>
              <div>
                <p style={{color:"#1371c8",fontSize:"16px",wordBreak:"break-all"}}>{client.firstName} {client.lastName}</p>
              </div>
              <div>
                <span style={{lineHeight:"18px",padding:"0 8px",fontSize:"11px",borderRadius:"32px",backgroundColor:"#f8f8f8",color:"#384349"}}>{client.clientType}</span>
              </div>
              <div>
                <div style={{display:"flex",gap:"5px",marginBottom:"5px",fontSize:"13px",lineHeight:"18px",alignItems:"center"}}>
                  <p style={{color:"#444"}}>{client.phone}</p>
                  <p style={{color:"#708693"}}>Mobile</p>
                  <img src={Telephone} width="12px" height="12px"/>
                  <img src={Chat} width="12px" height="12px"/>
                </div>
                <div style={{display:"flex",gap:"5px",flexWrap:"wrap",fontSize:"13px",lineHeight:"18px",alignItems:"center"}}>
                  <p style={{color:"#444"}}>{client.email}</p>
                  <p style={{color:"#708693"}}>Home</p>
                  <img src={Envelope} width="12px" height="12px"/>
                </div>
              </div>
              <div>
                <p style={{color:"#444"}}>Clinician: {client.clinician}</p>
              </div>
              <div>
                <p style={{color:"#444"}}>Manage <svg style={{transform: "rotate(90deg)"}} xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="none" viewBox="0 0 8 12"><path fill="#707070" d="M1 .71a.996.996 0 000 1.41L4.88 6 1 9.88a.996.996 0 101.41 1.41L7 6.7a.996.996 0 000-1.41L2.41.7C2.03.32 1.39.32 1 .71z"></path></svg></p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Clients