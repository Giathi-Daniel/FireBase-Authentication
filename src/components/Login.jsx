import { signInWithEmailAndPassword } from 'firebase/auth'

import React, { useState } from 'react'
import { toast } from "react-toastify"

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (e) => {
        e.preventDefault()

        try {
            await signInWithEmailAndPassword(auth, email, password)
            toast.success("User registerred successfully", {
                position: "top-right"
            })
            window.location.href = "/profile"
        } catch (error) {
            toast.success(error.message, {
                position: "bottom-right"
            })
        }
    }

  return (
    <form onSubmit={handleLogin}>
        <h3>Login</h3>
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
                Submit
            </button>
        </div>
    </form>
  )
}
