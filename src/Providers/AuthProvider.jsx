import { createContext, useState } from "react";
import { getAuth } from "firebase/auth";
import { app } from "../../firebase.config";

const AuthContext=createContext(null)
const auth=getAuth(app)

const AuthProvider=({children})=>{
    const [user,setUser]=useState(null)
    const[loading,setLoading]=useState(true)
    const authInfo={
        user,
        loading
    }
}
return(
    <AuthContext.Provider value={authInfo}>
            {children}
    </AuthContext.Provider>
)
export default AuthContext