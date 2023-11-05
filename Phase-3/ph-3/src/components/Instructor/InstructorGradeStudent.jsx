import NavBar from "../UniversalComponents/NavBar";
import { Link, useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import GradeCreateTable from "./components/GradeCreateTable";

// import "./AccountPage.css";
import GradeTableEntries from "./components/GradeTableEntries";

import Table from "../UniversalComponents/Table";
import "./InstructorStyle.css";
// import Header from './components/UniversalComponents/Header';

function App() {
  const { studentID } = useParams();
  const { courseID } = useParams();

  const navigate = useNavigate();
  const [feedbackData, setFeedbackData] = useState([
    {
      ID: "",
      FEEDBACK: "",
    },
  ]);
  const [studentData, setStudenteData] = useState([{}]);
  const [gradeData, setGradeData] = useState([
    {
      examName: "",
      Grade: "",
    },
  ]);
  // const [error, setError] = useState(null);
  // const [error, setError] = useState(null);

  // PRINT DATA --------------------------------
  useEffect(() => {
    fetch(`http://localhost/A/InstructorPHP/fetchGradeData.php?id=${studentID}`, {
      credentials: "include",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Response status is not 200: ${response.status}`);
        }
      })
      .then((data) => setGradeData(data));
    // .catch((error) => console.error(error));
  }, [studentID]);

  // --------------------------------

  useEffect(() => {
    fetch(
      `http://localhost/A/InstructorPHP/fetchStudentData.php?id=${studentID}`,
      {
        credentials: "include",
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Response status is not 200: ${response.status}`);
        }
      })
      .then((data) => setStudenteData(data[0]));
    // .catch((error) => setError(error));
  }, [studentID]);
  

  const upload = () => {
    const updatedfeedbackData = {
      ID: feedbackData.ID,
      FEEDBACK: feedbackData.FEEDBACK,
    };
    console.log(JSON.stringify(feedbackData));
    fetch(`http://localhost/A/InstructorPHP/createfeedback.php`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedfeedbackData),
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
          // navigate(`/Instructor/GradeStudent/${gradeData.StudentID}`);
        } else {
          alert(data.split(":")[2]);
        }
      })
      .catch((error) => {
        console.error("Error updating user data:", error);
      });
  };
  console.log(JSON.stringify(feedbackData));

  const updateField = (field, value) => {
    setFeedbackData({ ...feedbackData, [field]: value });
  };

  return (
    <div className="mainBody">
      <div className="pageFormat">
        <NavBar x="instructorNav" />
      </div>
      <br />
      <br />
      <div className="studentBody">
        Course:
        <div className="subContentTxt">
          Information Security-1
          <br />
          <b>Student Name: </b> {studentData.Name}
          <br />
          <b>Email: </b> {studentData.Email}
          <br />
          <b>StudentID: </b>
          {studentData.StudentID}
          <br />
          <br />
          Grades:
          <GradeCreateTable
            data={
              gradeData &&
              gradeData.map(function mapentries(temp) {
                return (
                  <GradeTableEntries
                    name={temp.examName}
                    grade={temp.Grade}
                    // link={`/Instructor/editAssignment`}
                  />
                );
              })
            }
          />
          <Link to="/Instructor/GradeExam" className="ic-createAssign">
            Grade Exam
          </Link>
          <br />
          <br />
          Provide Feedback: <br />
          <input
            type="number"
            placeholder="Recipient ID"
            className="ice-input"
            onChange={(e) => updateField("ID", e.target.value)}
          />{" "}
          <br />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="ice-input"
            placeholder="Enter Feedback"
            onChange={(e) => updateField("FEEDBACK", e.target.value)}
          ></textarea>
          <br />
          <button type="submit" className="ic-createAssign" onClick={upload}>
            Submit Feedback
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
