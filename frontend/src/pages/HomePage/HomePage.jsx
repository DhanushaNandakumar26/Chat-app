import React from 'react';
import './HomePage.css'
import Sidebar from '../../components/Sidebar/Sidebar';
import MessageContainer from '../../components/Messages/MessageContainer';

const HomePage = () => {
  return (
    <div className='homePage'>
        <Sidebar/>
        <MessageContainer/>
    </div>
  )
}

export default HomePage;