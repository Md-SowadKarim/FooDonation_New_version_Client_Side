import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import {auth} from "../firebaseConfig/FirebaseConfig"
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'

export const AuthContext=createContext(null)
const googleProvider=new GoogleAuthProvider()
// const githubProvider=new GithubAuthProvider()
const AuthProvider = ({children}) => {
   
   
    const [user,setUser]=useState(null)
    const [loading, setloading] = useState(true)
    const googleLogin=()=>{
        setloading(true);
        return signInWithPopup(auth,googleProvider)
    }

    const createUser=(email,password)=>{
        setloading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn=(email,password)=>{
        setloading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    const handleUpdateProfile = (name,photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL : photo
        })
    }
    const logOut=()=>{
        setloading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        onAuthStateChanged(auth,(currenUser)=>{
  
       const userMail=currenUser?.email || user?.email
            const loggedUser={email : userMail}
            setUser(currenUser)
            setloading(false)
            if(currenUser){
                
                axios.post("https://foodonation.vercel.app/jwt",loggedUser,{withCredentials:true})
                .then(res=>{
                    console.log("auth token ",res.data)
                    if(res.data.success){
    
                    }
                })
            }else{
                axios.post("https://foodonation.vercel.app/logout",loggedUser,{withCredentials:true})
                .then(res=>console.log(res.data))
                
            }
        })
    },[])
    const authentication={
        googleLogin,
        signIn,
        createUser,
        user,
        logOut,
        handleUpdateProfile,
        loading
    }
  return (
    <AuthContext.Provider value={authentication}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
