import React, {  useState } from "react";
//import { AuthContext } from "../contexts/AuthContext";
import '../styles/login.css'
const Login=()=>{
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);
//const {login}=useContext(AuthContext)
console.log("lOGIN PAGE")
const handleSubmit=async(e)=>{
    e.preventDefault()
    setLoading(true);
    setError(null); // Reset error before attempting login
    // try {
    //    await login({email,password})
    // } catch (error) {
    //     console.error('Login failed',error)
    //     setError('Login failed. Please check your credentials and try again.');
    // }
    if (email === "user@example.com" && password === "password") {
        alert("Login successful!");
        // Redirect to another page after successful login if needed
      } else {
        setError('Invalid credentials. Please try again.');
      }
    setLoading(false);
}
return(
    <div className="login-container">
    <form onSubmit={handleSubmit} className="login-form">
        <h2 className="login-title">Login</h2>
        {error && <p className="error-message">{error}</p>}
        <div className="input-container">
            <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input-field"
            />
        </div>
        <div className="input-container">
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="input-field"
            />
        </div>
        <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
        </button>
    </form>
</div>
)
}
export default Login