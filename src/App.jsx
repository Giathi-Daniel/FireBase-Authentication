import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth"

import Home from "./pages/Home"
import Private from "./pages/Private"
import ProtectedRoute from "./components/ProtectedRoute"
import { auth } from "./firebase"


function App() {
  const [user, setUser] = useState(null)
  const [isFetching, setIsFetching] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user) {
        setUser(user) 
        setIsFetching(false)
        return
      }

      setUser(null)
      setIsFetching(false)
    })
    return () => unsubscribe();
  }, [])

  if (isFetching) {
    return <h2>Loading...</h2>
  }

  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home user={user} />} />
            <Route 
              path="/private" 
              element={
                <ProtectedRoute user={user}>
                  <Private />
                </ProtectedRoute> 
              }
            />
        </Routes>
    </Router>
  )
}

export default App
