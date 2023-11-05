import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../UniversalComponents/NavBar";
import Forms from "../UniversalComponents/Forms";
import "./InstructorStyle.css";
// import Header from './components/UniversalComponents/Header';

function App() {
  const navigate = useNavigate();
  const [assignData, setAssignData] = useState({
    AssignmentID: '',
    LINK: "",
    MAXSCORE: "",
    NAME: "",
    CourseCode: "",
    DUE: '',
    InstructorID: "",
  });
  const upload = () => {
    const updatedAssignData = {
      AssignmentID: assignData.AssignID,
      LINK: assignData.LINK,
      MAXSCORE: assignData.MAXSCORE,
      NAME: assignData.NAME,
      DUE: assignData.DUE,
      CourseCode: assignData.CourseCode,
      InstructorID: assignData.InstructorID,
    };

    fetch(`http://localhost/A/InstructorPHP/createassignment.php`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedAssignData),
      credentials: "include",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Check for empty response
        if (response.status === 204) {
          return null; // No content
        }
        return response.json(); // Parse JSON response
      })
      .then((data) => {
        if (data === "Success") {
          alert(data);
          navigate(`/Instructor/Courses/${assignData.CourseCode}`);
        } else {
          alert(data.split(":")[2]);
        }
      })
      .catch((error) => {
        console.error("Error updating user data:", error);
      });
      console.log(JSON.stringify(assignData));

  };
  console.log(assignData);
  // Helper function to update the state when a field changes
  const updateField = (field, value) => {
    setAssignData({ ...assignData, [field]: value });
  };
  return (
    <div className="sfe-mainBody">
      <div className="pageFormat">
        <NavBar x="instructorNav" />
      </div>
      <br />
      <br />
      <div className="studentBody">
        Enter new assignment details: <br />
        <input
          type="text"
          placeholder="Enter assignment name"
          className="ice-input"
          onChange={(e) => updateField("NAME", e.target.value)}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="Enter assignment ID"
          className="ice-input"
          onChange={(e) => updateField("AssignID", e.target.value)}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="Enter assignment link"
          className="ice-input"
          onChange={(e) => updateField("LINK", e.target.value)}
        />{" "}
        <br />
        <input
          type="number"
          placeholder="Enter max score"
          className="ice-input"
          onChange={(e) => updateField("MAXSCORE", e.target.value)}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="Enter Instructor ID"
          className="ice-input"
          onChange={(e) => updateField("InstructorID", e.target.value)}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="Enter Course Code"
          className="ice-input"
          onChange={(e) => updateField("CourseCode", e.target.value)}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="Enter exam date (YYYY-MM-DD)"
          className="ice-input"
          onChange={(e) => updateField("DUE", e.target.value)}
        />{" "}
        <br />
        <button type="submit" className="ic-createAssign" onClick={upload}>
        Create Assignment
        </button>
      </div>
    </div>
  );
}

export default App;
