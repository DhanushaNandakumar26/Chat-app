import React from 'react'
import GenderCheckbox from './GenderCheckbox'

const Registration = () => {
  return (
    <div className='loginMain'>
    <div className='loginPage'>
      <h1 className='loginHeading'>Registration</h1>

      <form className='loginForm'>
        <div className='formFields'>
          <label className='loginLabel'>
            <span className='loginLabelText'>Username</span>
          </label>
          <input type='text' placeholder='Enter Username' className='loginInputField' />
        </div>

        <div className='formFields'>
          <label className='loginLabel'>
            <span className='loginLabelText'>Password</span>
          </label>
          <input type='password' placeholder='Enter Password' className='loginInputField' />
        </div>

        <div className='formFields'>
          <label className='loginLabel'>
            <span className='loginLabelText'>Confirm Password</span>
          </label>
          <input type='password' placeholder='Confirm Password' className='loginInputField' />
        </div>

<div>
<GenderCheckbox/>

</div>
        <a href='#' className='noAccountLink'>Already have an account</a>

        <div>
          <button className='loginButton'>
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Registration