import axios from "axios";
const API_URL=import.meta.env.VITE_API_URL || 'http://localhost:6001/'

export const login=async(credentials)=>
{
const response=await axios.post(`${API_URL}/auth/login`,credentials)
return response.data
}
export const logout=async()=>{
    return await axios.post(`${API_URL}/auth/logout`)
}