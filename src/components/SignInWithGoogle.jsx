import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"

import { auth } from "../firebase/firebase"
import { toast } from "react-toastify"

function SignInWithGoogle() {
    function googleLogin() {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider).then(async (result) => {
            if(result.user) {
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