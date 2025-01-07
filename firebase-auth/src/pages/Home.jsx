import React, { useState } from 'react'

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"

import { auth } from "../firebase"

const Home = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isSignUpActive, setIsSignUpActive] = useState(false)
  const handleMethodChange = () => {
    setIsSignUpActive(!isSignUpActive)
  }

  const handleSignUp = () => {
    if (!email || !password) return;
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message
      console.log(errorCode, errorMessage)
    })
  }

  const handleSignIn = () => {
    if (!email || !password) return;
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message
      console.log(errorCode, errorMessage)
    })
  }

  const handleEmailChange = (event) => setEmail(event.target.value)
  const handlePasswordChange = (event) => setPassword(event.target.value)

  return (
    <form>
      {isSignUpActive && <legend>Sign Up</legend>}
      {!isSignUpActive && <legend>Sign In</legend>}

      {/* <legend>Sign Up</legend> */}
      <fieldset>
        <ul>
          <li>
            <label htmlFor="email">Email</label>
            <input type="email" id='email' onChange={handleEmailChange} />
          </li>
          <li>
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={handlePasswordChange} />
          </li>
        </ul>
        {isSignUpActive && <button type='button' onClick={handleSignUp}>Sign Up</button>}
        {!isSignUpActive && <button type='button' onClick={handleSignIn}>Sign In</button>}
        
      </fieldset>
      {isSignUpActive && <a onClick={handleMethodChange}>Login</a>}
      {!isSignUpActive && (
        <a onClick={handleMethodChange}>Create an account</a>
      )}
    </form>
  )
}

export default Home