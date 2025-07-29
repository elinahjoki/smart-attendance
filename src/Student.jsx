
import React, { useState } from 'react';
import StudentHome from './StudentHome';
import MyAttendance from './MyAttendance';
import Notifications from './StudentNotifications';
import { FaHome } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6"
import { FaBell } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import ManualAttendance from './ManualAttendance';
import { LuBookOpenText } from "react-icons/lu"
import UploadProfileImage from './UploadProfileImage';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';



function Student() {
  const [activePage, setActivePage] = useState('home');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
     navigate('/login', { state: { logoutSuccess: true } });

       
  };


  return (
    <div className="student-dashboard">
      <div className='nav'>
        <h2>Student Dashboard</h2>
        <UploadProfileImage />
       
       <div className="logout-btn" onClick={handleLogout}>
  <IoIosLogOut /> Logout
</div></div>
        
        <div className='parentdiv'>
      <aside className="sidebar">
        
        <ul>
          <li>
        <button onClick={()=>setActivePage("home")}><FaHome /> Home </button></li>
                <li>
       <button onClick={()=>setActivePage("my-attendance")}><FaUserGroup />My Attendance</button></li>
          <li>
      <button onClick={()=>setActivePage("notifications")}><FaBell />Notifications</button>
      </li>

      <li>
      <button onClick={()=>setActivePage("manualattendance")}><LuBookOpenText />Manual Attendance</button>
          </li>   
             </ul>
      </aside>

      <main className="main-content">
        {activePage === 'home' && <StudentHome />}
        {activePage === 'my-attendance' && <MyAttendance />}
        {activePage === 'notifications' && <Notifications />}
          {activePage === 'myattendance' && <ManualAttendance />}
        
      </main>
    </div></div>
  );

}
export default Student