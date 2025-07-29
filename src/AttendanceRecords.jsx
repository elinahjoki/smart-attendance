import React from 'react';
import './style.css'

function AttendanceRecords() {
  const records = []
  
  return (
    <div className="attendance-records">
      <h3>Attendance Records</h3>
      <table className="records-table">
        <thead>
          <tr><th>Date</th><th>Total</th><th>Present</th><th>Absent</th></tr>
        </thead>
        <tbody>
        {records.map((record, index) => (
            <tr key={index}>
              <td>{record.date}</td>
              <td>{record.total}</td>
              <td>{record.present}</td>
              <td>{record.absent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default AttendanceRecords