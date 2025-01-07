import React, { useState } from 'react'

const Home = () => {
  const [isSignUpActive, setIsSignUpActive] = useState(false)
  const handleMethodChange = () => {
    setIsSignUpActive(!isSignUpActive)
  }

  return (
    <form>
      {isSignUpActive && <legend>Sign Up</legend>}
      {!isSignUpActive && <legend>Sign In</legend>}

      {/* <legend>Sign Up</legend> */}
      <fieldset>
        <ul>
          <li>
            <label htmlFor="email">Email</label>
            <input type="email" id='email' />
          </li>
          <li>
            <label htmlFor="password">Password</label>
            <input type="password" id='password' />
          </li>
        </ul>
        {isSignUpActive && <button type='button'>Sign Up</button>}
        {!isSignUpActive && <button type='button'>Sign In</button>}
        
      </fieldset>
      {isSignUpActive && <a onClick={handleMethodChange}>Login</a>}
      {!isSignUpActive && (
        <a onClick={handleMethodChange}>Create an account</a>
      )}
    </form>
  )
}

export default Home