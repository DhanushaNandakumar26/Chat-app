import React from 'react';
import './LoginPage.css'

const Login = () => {
  return (
    <div className='loginMain'>
      <div className='loginPage'>
        <h1 className='loginHeading'>Login</h1>

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

          <a href='#' className='noAccountLink'>Don't have an account</a>

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

export default Login