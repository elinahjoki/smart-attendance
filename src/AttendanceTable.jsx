import React from "react"
function AttendanceTable({data}){
    return(
        <table>
            <thead>
            <tr>
            <th>id</th>
            <th>Regno</th>
            <th>Session_id</th>
            <th>Status</th>
            <th>Time_In</th>
            </tr>
            </thead>
            <tbody>

            {students.map((student) => (
            <tr key={student.id}>
            <td>{student.Regno}</td>
            <td>{student.Session_id}</td>
            <td>{student.Status}</td>
            <td>{student.timeIn || 'N/A'}</td>
            </tr>
            ))}
            </tbody>
        </table>
    )

}
export default AttendanceTable;