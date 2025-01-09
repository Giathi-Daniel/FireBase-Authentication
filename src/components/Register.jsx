import React, { useState } from 'react'

export const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')

  return (
    <form >
        <h3>Register</h3>
        <div className='mb-3'>
            <label>First Name</label>
            <input 
                type="text" 
                className="form-control" 
                placeholder='First Name'
                onChange={(e) => setFname(e.target.value)}
            />
        </div>
        <div className='mb-3'>
            <label>Last Name</label>
            <input 
                type="text" 
                className="form-control" 
                placeholder='Last Name'
                onChange={(e) => setLname(e.target.value)}
            />
        </div>
        <div className='mb-3'>
            <label>Email</label>
            <input 
                type="email" 
                className="form-control" 
                placeholder='Enter Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
        </div>

        <div className='mb-3'>
            <label>Password</label>
            <input 
                type="password" 
                className="form-control" 
                placeholder='Enter Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
        </div>

        <div>
            <button type='submit' className='btn btn-primary'>
                Sign Up
            </button>
        </div>
    </form>
  )
}
