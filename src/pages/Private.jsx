import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase/firebase'

const Private = () => {
    const handleSignOut = () => {
        signOut(auth)
            .then(() => console.log("Sign Out"))
            .catch((error) => console.log(error))
    }

  return (
    <>
        <div>Private</div>
        <button onClick={handleSignOut}>Sign Out</button>
    </>
  )
}

export default Private