import React from 'react'

import { auth } from "./firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail, updatePassword, sendEmailVerification } from 'firebase/auth'

export const CreateUserWithEmainAndPassword = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
}

export const SignInWithEmailAndPassword = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}

export const SignInWithGoogle = async() => {
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(auth, provider)

    return result;
}

export const SignOut = () => {
    return auth.signOut()
}

// export const PasswordReset = (email) => {
//     return sendPasswordResetEmail(auth, email)
// }

// export const PasswordChange = (password) => {
//     return updatePassword(auth.currentUser, password)
// }

// export const SendEmailVerification = () => {
//     return sendEmailVerification(auth.currentUser, {
//         url: `${window.location.origin}/home`,
//     })
// }

const auth = () => {
  return (
    <div>auth</div>
  )
}

export default auth