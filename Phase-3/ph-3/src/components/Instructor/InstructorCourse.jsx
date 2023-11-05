import NavBar from "../UniversalComponents/NavBar";
import Table from "../UniversalComponents/Table";
import "./InstructorStyle.css";
import CreateTable from "./components/AssignCreateTable";
import CreateExamTable from "./components/examCreateTable";

// import "./AccountPage.css";
import TableEntries from "./components/AssignTableEntries";
import TableExamEntries from "./components/AssignTableEntries";

import { Link, useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

// import Header from './components/UniversalComponents/Header';

function App() {
  const { courseID } = useParams();
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
  const [assignData, setAssignData] = useState();
  const [examData, setExamData] = useState();
  // const [error, setError] = useState(null);
  // const [error, setError] = useState(null);


  // PRINT DATA --------------------------------

  useEffect(() => {
    fetch(`http://localhost/A/InstructorPHP/fetchCourseDetails.php?id=${courseID}`, {
      credentials: "include",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Response status is not 200: ${response.status}`);
        }
      })
      .then((data) => setCourseData(data[0]));
    // .catch((error) => setError(error));
  }, [courseID]);
  console.log(courseData);
  // --------------------------------

  // update syllabus -------------------------
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
    console.log(JSON.stringify(updatedCourseData));

    fetch(`http://localhost/A/InstructorPHP/updateSyllabus.php`, {
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
  // -----------------------------------

  // Helper function to update the state when a field changes
  const updateField = (field, value) => {
    setCourseData({ ...courseData, [field]: value });
  };

  // const [error, setError] = useState(null);
  useEffect(() => {
    fetch(`http://localhost/A/InstructorPHP/assigndata.php?id=${courseID}`, {
      credentials: "include",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Response status is not 200: ${response.status}`);
        }
      })
      .then((data) => setAssignData(data));
    // .catch((error) => setError(error));
  }, [courseID]);
  console.log(assignData);
  // if (error) {
  //   // Handle the error condition, e.g., server is down
  //   return <div>Access Denied: Server is not responding.</div>;
  // }

  const deleteUser = (id) => {
    console.log(id);
    fetch(`http://localhost/A/InstructorPHP/deleteassign.php?id=${id}`)
      .then((response) => response.json())
      .then(() => {
        setAssignData(assignData.filter((data) => data.NAME !== id));
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetch(`http://localhost/A/InstructorPHP/examdata.php?id=${courseID}`, {
      credentials: "include",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Response status is not 200: ${response.status}`);
        }
      })
      .then((data) => setExamData(data));
    // .catch((error) => setError(error));
  }, [courseID]);
  console.log(examData);
  // if (error) {
  //   // Handle the error condition, e.g., server is down
  //   return <div>Access Denied: Server is not responding.</div>;
  // }

  const deleteExam = (id) => {
    console.log(id);
    fetch(`http://localhost/A/InstructorPHP/deleteexam.php?id=${id}`)
      .then((response) => response.json())
      .then(() => {
        setAssignData(examData.filter((data) => data.NAME !== id));
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="mainBody">
      <div className="pageFormat">
        <NavBar x="instructorNav" />
      </div>
      <br />
      <br />
      <div className="studentBody">
        <b>Course Code:</b> {courseData.CODE}
        <div className="subContentTxt">
          {courseData.COURSE}
          <br />
          
          {/* <input
            type="text"
            className="ice-input"
            placeholder="Enter new syllabus link"
            onChange={(e) => setCourseData({... courseData, SYLLABUS:e.target.value})}
          />
          <br />

          <button type="submit" className="ic-createAssign" onClick={upload}>
          Edit
        </button> */}
          <br />
    
          Assignments:
          
          <CreateTable
            data={assignData &&assignData.map(function mapentries(temp) {
              return (
                <TableEntries
                  nm={temp.NAME}
                  due={temp.DUE}
                  max={temp.MAXSCORE}
                  // link={`/Instructor/editAssignment`}
                  deleteAccount={() => deleteUser(temp.NAME)}
                />
              );
            })}
          />
          <div className="tempMargin"></div>
          <Link to="/Instructor/CreateAssignment" className="ic-createAssign">
            Create New Assignment
          </Link>
          <br />
          <br />
          Exams:
          <CreateExamTable
            data={examData&&examData.map(function mapentries(temp) {
              return (
                <TableExamEntries
                  nm={temp.NAME}
                  due={temp.DATE}
                  max={temp.MAXSCORE}
                  // link={`/Instructor/editAssignment`}
                  deleteAccount={() => deleteExam(temp.ExamID)}
                />
              );
            })}
          />
          <div className="tempMargin"></div>
          <Link to="/Instructor/CreateExams" className="ic-createAssign">
            Create New Exam
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
