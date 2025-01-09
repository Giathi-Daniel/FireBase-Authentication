import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Login } from './components/Login'
import Register from './components/Register'

import { ToastContainer } from "react-toastify"

const App = () => {
  return (
    <Router>
      <div>
        <div>
          <div>
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
            </Routes>
            <ToastContainer />
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App