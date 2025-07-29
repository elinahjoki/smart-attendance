import "./style.css";
import React, {useEffect, useState} from "react"
import {useNavigate} from "react-router-dom";
import {useLocation} from 'react-router-dom'
import { FaCheckCircle } from 'react-icons/fa';


function Login(){
  

        const [registration, setRegistration] = useState('');
        const [password, setPassword] = useState('');
        const navigate = useNavigate();
        const [errors, setErrors] = useState([]);
        const[error,setError]=useState("")
        const[token,setToken]=useState("")

        const location = useLocation();
        const logoutSuccess = location.state?.logoutSuccess;
         const [showLogoutMessage, setShowLogoutMessage] = useState(false);
         

        

           useEffect(() => {
    if (location.state?.logoutSuccess) {
      setShowLogoutMessage(true);
      const timer = setTimeout(() => {
        setShowLogoutMessage(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [location.state]);


         function handleNameChange(event){
        setRegistration(event.target.value)
    }

       function handlePasswordChange(event){
        setPassword(event.target.value)}

        function goToSignUp(){
                navigate('/SignUp')
        }

        const handleSubmit = async(event)=> {
         event.preventDefault();
         setError('')
         try{
          const response=await api.post('/auth/signin',{
            registration,password
          });

          const token=response.data.token;
          setToken(token);
          localStorage.setItem('token',token);
          alert('Login successful')}
          catch (err){
            setErrors(err.response?.data?.message||'Login failed')
          }
        


         

    const newErrors = {};
    if (!registration) newErrors.registration = "Reg No is required";
    if (!password) newErrors.password = "Password is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Logging in with:", { registration, password });
      alert("Logged in successfully!");

    }
    
                    
                 if (role === 'teacher') {
                 navigate('/Teacher');
                } else if (role === 'student') {
                 navigate('/Student');
                } else {
                navigate('/Admin');
        
                }
        }

  return(
        <div className="Page">
    {showLogoutMessage && (
      <div className="logout-message">
        <FaCheckCircle className="tick-icon" />
        <span>Logged out successfully</span>
      </div>
     
        
      )}
                <header className="header">
                        <h1>Smart Attendance System</h1>
                        <p>Please fill in the details to log in</p>
                </header>
      {error && <p className="error">{error}</p>}
        <form className="form" onSubmit={handleSubmit}>

        <label htmlFor="registration">Reg No:</label>
        <input type="text" value={registration} onChange={handleNameChange} placeholder="enter your regno"/>

        {errors.registration && <p className="error">{errors.registration}</p>}

        <br />
            <label htmlFor="password">Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} placeholder="enter your password"/>

          {errors.password && <p className="error">{errors.password}</p>}
<br />
        <button type="submit" className="btn" >Sign In</button>
</form>
<footer className="footer">
<div className="footer1"><p>Not a member?</p><button className="btn" onClick={goToSignUp}>Sign Up</button></div>
<p>&copy; 2025  Smart Attendance System</p></footer>
</div>
  )
}
export default Login