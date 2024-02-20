// StudentsTable.jsx
import React from "react";
import "./StudentsTable.css";

const StudentsTable = () => {
  // Replace with actual data
  const studentsData = [
    // Array of student data
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          {/* Other headers */}
        </tr>
      </thead>
      <tbody>
        {studentsData.map((student) => (
          <tr key={student.id}>
            <td>{student.id}</td>
            {/* Other table cells */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentsTable;
