import React, { useEffect, useState } from 'react'
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Login } from './components/Login'
import Register from './components/Register'

import { ToastContainer } from "react-toastify"
import Profile from './components/Profile'
import { auth } from './firebase/firebase'

const App = () => {
  const [user, setUser] = useState()

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user)
    })
  })
  return (
    <Router>
      <div>
        <div>
          <div>
            <Routes>
              <Route 
                path='/' 
                element={user ? <Navigate to={'/profile'} /> : <Login />} 
              />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/profile' element={<Profile />} />
            </Routes>
            <ToastContainer />
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App