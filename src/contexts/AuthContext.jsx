import React, { useEffect, useState } from "react";
import propTypes from 'prop-types'
import {AuthContext} from './AuthContext'
import { login as loginAPI,logout as logoutAPI } from "../api/authApi";
import { decodeToken,isTokenExpired } from "../utils/authUtils";
export const AuthProvider=({children})=>{
    const [user,setUser]=useState(null)
    const [isAuthenticated,setIsAuthenticated]=useState(false)
    useEffect(()=>{
     const token=localStorage.getItem("token")
     if(token && !isTokenExpired(token))
     {
        setUser(decodeToken(token))
        setIsAuthenticated(true)
     }
    },[])
    const login=async(credentials)=>{
        const {token}=await loginAPI(credentials)
        localStorage.setItem('token',token)
        setUser(decodeToken(token))
        setIsAuthenticated(true)
    }
    const logout=async()=>{
        try {
            await logoutAPI()
            localStorage.removeItem('token')
            setUser(null)
            setIsAuthenticated(false)
        } catch (error) {
            console.error("Logout failed:", error);
        }
    }
    return(
        <AuthContext.Provider value={{user,isAuthenticated,login,logout}}>
            {children}
        </AuthContext.Provider>   
    )
}
AuthProvider.propTypes={
children:propTypes.node.isRequired
}