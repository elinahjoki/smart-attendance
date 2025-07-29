import React, { useEffect, useState} from 'react';
import AttendanceTable from "./AttendanceTable"
import {getAttendance} from "/src/Services/api"
import { FaHome } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6"
import { LuBookOpenText } from "react-icons/lu";
import { BsGraphUp } from "react-icons/bs";
import { FaBell } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { Link } from 'react-router-dom';
import "./style.css";
import Home from './Home';
import LiveAttendance from './LiveAttendance';
import AttendanceRecords from './attendanceRecords';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';




function Teacher (){
  const[activePage,setActivePage]=useState("home")
   const navigate = useNavigate();

     const handleLogout = () => {
    localStorage.clear();

    navigate('/login', { state: { logoutSuccess: true } });

    
  };

  return(
    <>
<div className='nav'>
   <h2>Teacher Dashboard</h2>
  <div className="logout-btn" onClick={handleLogout}>
     <IoIosLogOut /> Logout
   </div>
</div>
   
    <div className='parentdiv'>
    <div className='sidebar'>
    <ul className="sidebar-menu">
      <li>
        <button onClick={()=>setActivePage("home")}><FaHome /> Home </button></li>
      <li>
        <button onClick={()=>setActivePage("live-attendance")}><FaUserGroup />Live Attendance</button></li>
      <li>
        <button onClick={()=>setActivePage("attendance-records")}><LuBookOpenText />Attendance Records</button> </li>
      <li>
        <button onClick={()=>setActivePage("reports")}><BsGraphUp />Reports</button></li>
      <li>
         <button onClick={()=>setActivePage("notifications")}><FaBell />Notifications</button>
         </li>
      <li>
        <button  onClick={()=>setActivePage("settings")}><IoIosSettings />Settings</button></li>
      
    </ul></div>
      
      <div className="main-content">
        {activePage ==="home" && <Home/>}
        {activePage ==="live-attendance" && <LiveAttendance/>}
         {activePage ==="attendance-records" && <AttendanceRecords/>}

      </div>
    
  
    </div>

    </>
  )
    
}

export default Teacher