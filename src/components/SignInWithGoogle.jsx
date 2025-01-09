import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"

import { auth, db } from "../firebase/firebase"
import { setDoc, doc } from 'firebase/firestore'
import { toast } from "react-toastify"

function SignInWithGoogle() {
    function googleLogin() {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider).then(async (result) => {
            const user = result.user
            if(user) {
                await setDoc(doc(db,"Users", user.uid), {
                    email: user.email,
                    firstName: user.displayName,
                    photo: user.photoURL,
                    lastName: ""
                })
                toast.success("User logged in successfully", {
                    position: "top-right"
                })

                window.location.href = "/profile"
            }
        })
    }

    return (
        <div>
            <p>--Or continue with--</p>
            <div style={{display:"flex",justifyContent:"center",cursor:"pointer"}} onClick={googleLogin}>
                <img src="" width={"60%"} />
            </div>
        </div>
    )
}

export default SignInWithGoogle


// RULES FOR FIRESTORE
// service cloud.firestore {
//     match /database/(database)/documents {
//         match /(document=**) {
//             allow read, write: if request.auth != null;
//         }
//     }
// }