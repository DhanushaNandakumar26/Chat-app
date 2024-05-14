import React from 'react';
import { BiLogOut } from "react-icons/bi";
import './LogoutButton.css'

const LogoutButton = () => {
  return (
    <div className='logoutButtonContainer'>
        <BiLogOut className='LogoutIcon' />
    </div>
  )
}

export default LogoutButton