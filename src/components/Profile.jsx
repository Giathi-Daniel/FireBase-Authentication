import React, { useEffect, useState } from 'react'

import { auth, db } from '../firebase/firebase'
import { doc, getDoc } from 'firebase/firestore'
import { toast } from "react-toastify"

const Profile = () => {
    const [userDetails, setUserDetails] = useState('')

    const fetchUserData = async () => {
        auth.onAuthStateChanged(async(user) => {
            setUserDetails(user)
            // const docRef = doc(db,"Users", user.uid)
            // const docSnap = await getDoc(docRef)
            // if(docSnap.exists()) {
            //     setUserDetails(docSnap.data())
            //     toast.success("User LoggedIn Successfully", {
            //         position: "top-right"
            //     })
            // } else {
            //     toast.success("User not Logged In", {
            //         position: "top-right"
            //     })
            // }
        })
    }

    useEffect(()=> {
        fetchUserData()
    },[])

    async function handleLogOut() {
        try {
            await auth.signOut()
            window.location.href = "/login"
        } catch (error) {
            toast.success(error.message, {
                position: "top-right"
            })
        }
    }

  return (
    <div>
        {userDetails ? (
            <>
                <div>
                    <img 
                        src={userDetails.photoURL}
                        width={"40%"}
                        style={{ borderRadius: "50%"}}
                    />
                </div>
                <h3>Welcome {userDetails.displayName}</h3>
                <div>
                    <p>Email: {userDetails.email}</p>
                    {/* <p>First Name: {userDetails.firstName}</p>
                    <p>Last Name: {userDetails.lastName}</p> */}
                </div>
                <button className='' onClick={handleLogOut}>
                    Logout
                </button>
            </>
        ) : (
            <p>Loading...</p>
        )}    
    </div>
  )
}

export default Profile