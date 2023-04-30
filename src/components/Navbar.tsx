import React from 'react'
import './styles/Navbar.css';
import Message from './assets/message.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='nav-left'>
            <div className='nav-logo'>
                <Link to="/">
                <img src='https://d34piorrop57r.cloudfront.net/frontend/assets/images/logo-white@2x-de2a63f37a89a3e1e51b486d3170bf3c-v1.png' alt='simplepractice'/>
                </Link>
            </div>
            <div className='nav-search-clients'>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" viewBox="0 0 16 16" className="icon-search"><path d="M11.433 6.889c0 2.748-2.159 4.889-4.716 4.889C4.159 11.778 2 9.637 2 6.888 2 4.142 4.16 2 6.717 2c2.557 0 4.716 2.14 4.716 4.889zm.716 4.052a6.976 6.976 0 001.284-4.052C13.433 3.084 10.426 0 6.717 0 3.007 0 0 3.084 0 6.889c0 3.804 3.007 6.889 6.717 6.889 1.52 0 2.923-.518 4.048-1.392l3.23 3.312a1 1 0 001.432-1.396l-3.278-3.361z" clip-rule="evenodd"></path></svg>
                </div>
                <div><input type="search" name="search" id="" placeholder='Search clients'/></div>
            </div>
            <div className='nav-income-tracker'>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill='#72d9aa'viewBox="0 0 24 24"><path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"></path></svg>
                </div>
                <div>
                    <p>Apr income</p>
                    <p>$100.00</p>
                </div>
            </div>
        </div>
        <div className='nav-right'>
            <div className='nav-right-btn'>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#fff" viewBox="0 0 12 12"><path d="M11.25 6.75h-4.5v4.5h-1.5v-4.5H.75v-1.5h4.5V.75h1.5v4.5h4.5v1.5z"></path></svg>
                <p>Create</p>
            </div>
            <div className='nav-right-btn'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#FFF" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zM5 7V5h14v2H5zm2 4h10v2H7zm0 4h7v2H7z"></path></svg>
                <p>Requests</p>
            </div>
            <div className='nav-right-btn'>
                <img src={Message} alt=''/>
                <p>Messages</p>
            </div>
            <div className='nav-right-btn-orange'>
                <p>Activate plan</p>
            </div>
            <div className="nav-right-user">
                <p>NS</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar