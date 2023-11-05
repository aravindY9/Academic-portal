import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../UniversalComponents/NavBar";
import Forms from "../UniversalComponents/Forms";
import "./InstructorStyle.css";
// import Header from './components/UniversalComponents/Header';

function App() {
  const navigate = useNavigate();
  const [examData, setExamData] = useState({
    NAME: "",
    ExamID: "",
    MAXSCORE: "",
    DATE: "",
    CourseCode: "",
    InstructorID: "",
  });

  const upload = () => {

    const updatedexamData = {
      NAME: examData.NAME,
      ExamID: examData.ExamID,
      MAXSCORE: examData.MAXSCORE,
      DATE: examData.DATE,
      CourseCode: examData.CourseCode,
      InstructorID: examData.InstructorID,
    };
    console.log(JSON.stringify(updatedexamData));
    fetch(`http://localhost/A/InstructorPHP/createexam.php`, {
      method: "POST",
      credentials:'include',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedexamData),
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
          navigate(`/Instructor/Courses/${examData.CourseCode}`);
        } else {
          alert(data.split(":")[2]);
        }
      })
      .catch((error) => {
        console.error("Error updating user data:", error);
      });
  };
  console.log(examData);

  const updateField = (field, value) => {
    setExamData({ ...examData, [field]: value });
  };

  return (
    <div className="sfe-mainBody">
      <div className="pageFormat">
        <NavBar x="instructorNav" />
      </div>
      <br />
      <br />
      <div className="studentBody">
        Enter new Exam details: <br />
        <input
          type="text"
          placeholder="Enter exam name"
          className="ice-input"
          onChange={(e) => updateField("NAME", e.target.value)}
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
          onChange={(e) => updateField('DATE', e.target.value)}
        />
        <br />
        <button type="submit" className="ic-createAssign" onClick={upload}>
        Create Exam
        </button>
      </div>
    </div>
  );
}

export default App;
