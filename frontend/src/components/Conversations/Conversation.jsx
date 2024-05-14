import React from 'react';
import './Conversation.css';

const Conversation = () => {
  return (
    <>
        <div className='conversationMain'>
            <div>
                <div className='conversationUserImage'>
                    <img src='https://avatar.iran.liara.run/public/boy' alt='user avatar' />
                </div>
            </div>
            <div className='conversationRightSide'>
                <p>John Doe</p>
                <span>😊</span>
            </div>
        </div>

        <div className='conversaionDivider' />
    </>
  )
}

export default Conversation