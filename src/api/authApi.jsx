import axios from "axios";
const API_URL=import.meta.env.VITE_API_URL || 'http://localhost:6001/'

export const login=async(credentials)=>
{
try {
    const response=await axios.post(`${API_URL}/auth/login`,credentials)
    return response.data
} catch (error) {
    console.error("Login error:", error);
    throw new Error("Login failed.");
}
}
export const logout=async()=>{
    try {
        return await axios.post(`${API_URL}/auth/logout`)
    } catch (error) {
        console.error("Logout error:", error);
    throw new Error("Logout failed.");
    }
}