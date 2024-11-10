import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Login=()=>{
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const {login}=useContext(AuthContext)
const handleSubmit=async(e)=>{
    e.preventDefault()
    try {
        await login({email,password})
    } catch (error) {
        console.error('Login failed',error)
    }
}
return(
    <form onSubmit={handleSubmit} >
     <h2>Login</h2>
     <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
     />
     <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
     />
     <button type="submit">Login</button>
    </form>
)
}
export default Login