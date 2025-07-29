
import React, {useState} from "react"
import {useNavigate} from "react-router-dom"
import "./style.css";

import dotenv from 'dotenv'
dotenv.config()

function  SignUp(){
  const url=process.env.BACKEND_URL
    const[registration,setRegistration]=useState("")
    const[password,setPassword]=useState("")
    const[confirmpassword,setConfirmPassword]=useState("")
    const [role, setRole] = useState("");
    const [errors, setErrors] = useState({});
  const [token, setToken] = useState('');
    const navigate=useNavigate();


    function handleNameChange(event){
        setRegistration(event.target.value)
    }
  
      function handlePasswordChange(event){
        setPassword(event.target.value)}


          function handleConfirmPasswordChange(event){
        setConfirmPassword(event.target.value)}

          function handleRoleChange(event) {
          setRole(event.target.value);
  }
    async function handleSubmit(event){
      event.preventDefault();
      
        const newErrors = {};
        if (!registration) newErrors.registration = "Regno is required"
      

    if (!password) newErrors.password = "Password is required";
    if (!confirmpassword) newErrors.confirmpassword = "Confirm Password is required";
    else
       if (password !== confirmpassword)
      newErrors.confirmpassword = "Passwords do not match";

    if (!role) newErrors.role = "Please select a role";

      setErrors(newErrors);

      if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:",  registration,  password, role );
      // alert("Form submitted successfully!");
      }
       
      
         try{
          const response=await api.post(`${url}/auth/signup`,{
            registration,  password, role
          });

          const token=response.data.token;
          setToken(token);
          localStorage.setItem('token',token);
          alert('signup successful')}
          catch (err){
            setErrors(err.response?.data?.message||'signup failed')
         

      console.log(registration,password,confirmpassword,role)
          }

    }

      return(
    <div className="Page">
    <header className="header"><h1 >Account Registration</h1>
    <p>To sign up,kindly fill the form below</p></header>
   

    <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="registration">Reg No:</label>
        <input   type="text" value={registration} onChange={handleNameChange} placeholder="enter your regno"/>

        {errors.registration && <p className="error">{errors.registration}</p>}

        
        <br />

        <label htmlFor="password">Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} placeholder="enter your password"/>

         {errors.password && <p className="error">{errors.password}</p>}
<br />
        
        <label htmlFor="confirmpassword">Confirm Password:</label>
        <input type="password" value={confirmpassword} onChange={handleConfirmPasswordChange} placeholder="confirm password"/>

          {errors.confirmpassword && <p className="error">{errors.confirmpassword}</p>}

        <br /><br />

        <label>Select Role</label>
      <div className="radio-group">
        <label>
          <input  className="radio-group" type="radio" name="role" value="student"
            checked={role === "student"}
            onChange={handleRoleChange}/> Student </label>
        <label>
          <input  className="radio-group" type="radio" name="role" value="teacher"
               checked={role === "teacher"}
            onChange={handleRoleChange}/>Teacher </label>
         <label>
          <input  className="radio-group" type="radio" name="role" value="admin"
             checked={role === "admin"}
            onChange={handleRoleChange}/>Admin </label>

             {errors.role && <p className="error">{errors.role}</p>}
      </div><br />
        <button className="btn-submit">Submit</button>
    </form>
     <footer className="footer">
      <div className="div-footer"><p>Already have an account?</p><button  className="btn-footer" onClick={()=>navigate("/")}>Log in</button></div>
  
       <p>&copy; 2025  Smart Attendance System</p></footer></div>
)
}

export default SignUp