import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../UniversalComponents/NavBar";

import Forms from "../UniversalComponents/Forms";
import "./InstructorStyle.css";
// import Header from './components/UniversalComponents/Header';

function App() {
  const navigate = useNavigate();
  const [courseData, setCourseData] = useState({
    COURSE: '',
    CODE: '',
    INSTRUCTORID: '',
    ROOMNUMBER: '',
    DAY: '',
    DURATION: '',
    SYLLABUS: '',
    CLASSTIME: '',
    OBJECTIVE: '',
  });

  const [error, setError] = useState(null);
  const upload = () => {
    const updatedCourseData = {
      COURSE: courseData.COURSE,
      CODE: courseData.CODE,
      INSTRUCTORID: courseData.INSTRUCTORID,
      ROOMNUMBER: courseData.ROOMNUMBER,
      DAY: courseData.DAY,
      DURATION: courseData.DURATION,
      SYLLABUS: courseData.SYLLABUS,
      CLASSTIME: courseData.CLASSTIME,
      OBJECTIVE: courseData.OBJECTIVE,
    };
    console.log(JSON.stringify(updatedCourseData))

    fetch(`http://localhost/A/InstructorPHP/creactecourse.php`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCourseData),
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
          navigate("/Instructor");
        } else {
          alert(data.split(":")[2]);
        }
      })
      .catch((error) => {
        console.error("Error updating user data:", error);
      });
  };
  // Helper function to update the state when a field changes
  const updateField = (field, value) => {
    setCourseData({ ...courseData, [field]: value });
  };

  return (
    <div className="ih-mainBody">
      <div className="pageFormat">
        <NavBar x="instructorNav" />
      </div>
      <br />
      <br />
      <div className="studentBody">
        Enter new course details: <br />
        <input
          type="text"
          placeholder="Enter course name"
          className="ice-input"
          onChange={(e) => updateField("COURSE", e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Enter course code"
          className="ice-input"
          onChange={(e) => updateField("CODE", e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Enter syllabus link"
          className="ice-input"
          onChange={(e) => updateField("SYLLABUS", e.target.value)}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="Enter Instructor ID"
          className="ice-input"
          onChange={(e) => updateField("INSTRUCTORID", e.target.value)}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="Enter room number"
          className="ice-input"
          onChange={(e) => updateField("ROOMNUMBER", e.target.value)}
        />{" "}
        <br />
        <input type="text" placeholder="Enter Day" className="ice-input"
                  onChange={(e) => updateField("DAY", e.target.value)}

        />{" "}
        <br />
        <input
          type="time"
          placeholder="Enter Time"
          className="ice-input"
          onChange={(e) => updateField("CLASSTIME", e.target.value)}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="Enter Duration"
          className="ice-input"
          onChange={(e) => updateField("DURATION", e.target.value)}
        />{" "}
        <br />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className="ice-input"
          placeholder="Enter course objectives"
          onChange={(e) => updateField("OBJECTIVE", e.target.value)}
        ></textarea>
        <br />
        <button type="submit" className="ic-createAssign" onClick={upload}>
          Create Course
        </button>
      </div>
    </div>
  );
}

export default App;
