import React from "react"
import './style.css'

function LiveAttendance(){
    const students=[]
    return (
    <div className="live-attendance">
      <h3>Live Attendance</h3>
      <table className="records-table ">
        <thead>
          <tr><th>Reg No</th >
          <th>session_id</th>
          <th>Time In</th>
          <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.id}</td>
              <td>{student.regNo}</td>
              <td>{student.time}</td>
                     <td className={`status ${student.status.toLowerCase()}`}>{student.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default LiveAttendance