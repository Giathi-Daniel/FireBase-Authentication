import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'

import { auth, db } from '../firebase/firebase'
import { setDoc } from 'firebase/firestore'

import { toast } from "react-toastify"

export const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')

    const handleRegister = async (e) => {
        e.preventDefault()

        try {
            await createUserWithEmailAndPassword(auth, email, password)
            const user = auth.currentUser
            
            if(user) {
                await setDoc(doc(db, "User", user.uid), {
                    email: user.email,
                    firstName: fname,
                    lastName: lname
                })
            }
            toast.success("User registerred successfully", {
                position: "top-right"
            })
        } catch (error) {
            console.log(error.message)
            toast.success(error.message, {
                position: "bottom-right"
            })
        }
    }

  return (
    <form onSubmit={handleRegister}>
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
