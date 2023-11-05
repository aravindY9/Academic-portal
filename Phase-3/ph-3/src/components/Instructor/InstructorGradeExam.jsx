import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../UniversalComponents/NavBar";
import Forms from "../UniversalComponents/Forms";
import "./InstructorStyle.css";
// import Header from './components/UniversalComponents/Header';

function App() {
  const navigate = useNavigate();
  const [gradeData, setGradeData] = useState({
    examName: "",
    ExamID: "",
    StudentID: "",
    Grade: "",
    GradeID: "",
  });

  const upload = () => {

    const updatedgradeData = {
      examName: gradeData.examName,
      ExamID: gradeData.ExamID,
      StudentID: gradeData.StudentID,
      Grade: gradeData.Grade,
      GradeID: gradeData.GradeID,
    };
    console.log(JSON.stringify(updatedgradeData));
    fetch(`http://localhost/A/InstructorPHP/creategrade.php`, {
      method: "POST",
      credentials:'include',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedgradeData),
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
          navigate(`/Instructor/GradeStudent/${gradeData.StudentID}`);
        } else {
          alert(data.split(":")[2]);
        }
      })
      .catch((error) => {
        console.error("Error updating user data:", error);
      });
  };
  console.log(gradeData);

  const updateField = (field, value) => {
    setGradeData({ ...gradeData, [field]: value });
  };

  return (
    <div className="sfe-mainBody">
      <div className="pageFormat">
        <NavBar x="instructorNav" />
      </div>
      <br />
      <br />
      <div className="studentBody">
        Enter Grade Details: <br />
        <input
          type="text"
          placeholder="Enter exam name"
          className="ice-input"
          onChange={(e) => updateField("examName", e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Enter examID"
          className="ice-input"
          onChange={(e) => updateField("ExamID", e.target.value)}
        />
        <br />
        <input
          type="number"
          placeholder="Enter Student ID"
          className="ice-input"
          onChange={(e) => updateField("StudentID", e.target.value)}
        />{" "}
        <br />
        <input
          type="number"
          placeholder="Enter Grade"
          className="ice-input"
          onChange={(e) => updateField("Grade", e.target.value)}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="Enter GradeID"
          className="ice-input"
          onChange={(e) => updateField('GradeID', e.target.value)}
        />
        <br />
        <button type="submit" className="ic-createAssign" onClick={upload}>
        Grade
        </button>
      </div>
    </div>
  );
}

export default App;
