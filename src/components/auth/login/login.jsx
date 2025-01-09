import React, { useState } from 'react'

import { SignInWithEmailAndPassword, SignInWithGoogle } from '../../../firebase/auth'
import { useAuth } from "../../../contexts/authContext"
import { Link, Navigate } from 'react-router-dom'


const login = () => {
    const { userLoggedIn } = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSignIn, setIsSignIn] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        if(!isSignIn) {
            setIsSignIn(true)
            await SignInWithEmailAndPassword(email, password)
        }
    }

    const onGoogleSignIn = (e) => {
        e.preventDefault()
        if(!isSignIn) {
            setIsSignIn(true)
            SignInWithGoogle().catch(err => {
                setIsSignIn(false)
            })
        }
    }

  return (
    <div>
        {userLoggedIn && (<Navigate to={'/home'} replace={true} />)}
        <main className='w-full h-screen flex self-center place-content-center place-items-center'>
            <div className='w-96 text-gray-600 space-y-5 shadow-xl border rounded-xl'>
                <div className='text-center'>
                    <div className='mt-2'>
                        <h3 className='text-gray-800 text-xl font-semibold sm:text-2xl'>Welcome Back</h3>
                    </div>
                </div>
                <form 
                    onSubmit={onSubmit}
                    className='space-y-5'
                >
                    <div>
                        <label className='text-sm text-gray-600 font-bold'>Email</label>
                        <input 
                            type="email" 
                            autoComplete="email" 
                            required
                            value={email} onChange={(e) => {setEmail(e.target.value)}}
                            className='w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none'
                        />
                    </div>
                    <div>
                        <label className='text-sm text-gray-600 font-bold'>Password</label>
                        <input 
                            type="password" 
                            autoComplete="password" 
                            required
                            value={password} onChange={(e) => {setPassword(e.target.value)}}
                            className='w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none'
                        />
                    </div>

                    {errorMessage && (
                        <span className='text-red-600 font-bold'>{errorMessage}</span>
                    )}

                    <button
                        type='button'
                        disabled={isSignIn}
                        className={`w-full px-4 py-2 text-white font-medium rounded-lg ${isSignIn}`}
                    >
                        {isSignIn ? 'Signing In...' : 'Sign In'}
                    </button>
                </form>
                <p className='text-center text-sm'>Don't have an account? <Link to={'/register'} /></p>
                <div className='flex flex-row text-center w-full'>
                    <div className='border-b-2 mb-2.5 mr-2 w-full'></div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default login