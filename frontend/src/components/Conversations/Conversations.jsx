import React from 'react'
import Conversation from './Conversation';
import './Conversation.css';

const Conversations = () => {
  return (
    <div className='conversationsMain'>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
    </div>
  )
}

export default Conversations