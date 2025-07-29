import React, { useEffect, useState} from 'react';
import AdminHome from "./AdminHome";
import AdminReports from "./AdminReports";
import AdminNotifications from "./AdminNotification";
import AdminSettings from "./AdminSettings";
import { IoIosLogOut } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { BsGraphUp } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


function Admin(){
  const[activePage,setActivePage]=useState("home")
  const navigate = useNavigate();

     const handleLogout = () => {
    localStorage.clear();
     navigate('/login', { state: { logoutSuccess: true } });

       
  };

    return(
            <>
        <div className='nav'>
           <h2>Admin Dashboard</h2>
           <div className="logout-btn" onClick={handleLogout}>
                <IoIosLogOut /> Logout
              </div>
</div>
                <div className='parentdiv'>
              <aside className="sidebar">
                
                <ul>
                  <li>
         <button onClick={()=>setActivePage("home")}><FaHome /> Home </button></li>
        <li>
                 <button onClick={()=>setActivePage("reports")}><BsGraphUp />Reports</button></li>
               <li>
                  <button onClick={()=>setActivePage("notifications")}><FaBell />Notifications</button>
                  </li>
               <li>
                 <button  onClick={()=>setActivePage("settings")}><IoIosSettings />Settings</button></li>
               
         </ul>
         </aside>
       </div>
        
        </>

    )

}
export default Admin