import React from "react";
import {Routes,Route} from 'react-router-dom'
import Login from "./Login.jsx"
import SignUp from "./SignUp.jsx"
import Teacher from "./Teacher.jsx";
import Student from "./Student.jsx";
import Admin from "./Admin.jsx";




function App() {

  return(
  
    <Routes >
      <Route path="/login" element={<Login/>}/>
      <Route path="/SignUp" element={ <SignUp/>}/>
      <Route path="/Teacher" element={ <Teacher/>}/>
      <Route path="/Student" element={ <Student/>}/>
      <Route path="/Admin" element={ <Admin/>}/>
    
    </Routes>
  
  )

}
export default App;


