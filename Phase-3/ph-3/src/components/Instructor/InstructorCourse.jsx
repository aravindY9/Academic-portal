import NavBar from "../UniversalComponents/NavBar";
import Table from "../UniversalComponents/Table";
import "./InstructorStyle.css";
import CreateTable from "./components/AssignCreateTable";
// import "./AccountPage.css";
import TableEntries from "./components/AssignTableEntries";
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

  // const [error, setError] = useState(null);
  // const [error, setError] = useState(null);


  // PRINT DATA --------------------------------

  useEffect(() => {
    fetch(`http://localhost/backend/fetchCourseDetails.php?id=${courseID}`, {
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

    fetch(`http://localhost/backend/updateSyllabus.php`, {
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
    fetch(`http://localhost/backend/assigndata.php?id=${courseID}`, {
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
    fetch(`http://localhost/backend/deleteassign.php?id=${id}`)
      .then((response) => response.json())
      .then(() => {
        setAssignData(assignData.filter((data) => data.NAME !== id));
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
          <br />
          <input
            type="text"
            className="ice-input"
            placeholder="Enter new syllabus link"
            onChange={(e) => setCourseData({... courseData, SYLLABUS:e.target.value})}
          />
          <br />

          <button type="submit" className="ic-createAssign" onClick={upload}>
          Edit
        </button>
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
          {/* <table className="ih-table">
            <tr>
              <th className="ih-th">Assessment Name</th>
              <th className="ih-th">Description</th>
              <th className="ih-th">Due Date</th>
              <th className="ih-th">Score</th>
              <th className="ih-th">Actions</th>
            </tr>
            <tr>
              <td className="ih-td">
                <p>Assignment 1</p>
              </td>
              <td className="ih-td">
                <p>Sorting</p>
              </td>
              <td className="ih-td">
                <p>09/30/2023</p>
              </td>
              <td className="ih-td">
                <p>100</p>
              </td>
              <td className="ih-td">
                <a href=""><Link to ="/Instructor/editAssignment">Edit</Link></a> |{" "}
                <a href="" className="ic-deleteButton">
                  Delete
                </a>
              </td>
            </tr>
            <tr>
              <td className="ih-td">
                <p>Assignment 2</p>
              </td>
              <td className="ih-td">
                <p>Data Cleaning</p>
              </td>
              <td className="ih-td">
                <p>10/5/2023</p>
              </td>
              <td className="ih-td">
                <p>100</p>
              </td>
              <td className="ih-td">
                <a href=""><Link to ="/Instructor/editAssignment">Edit</Link></a> |{" "}
                <a href="" className="ic-deleteButton">
                  Delete
                </a>
              </td>
            </tr>
          </table> */}
          <div className="tempMargin"></div>
          <Link to="/Instructor/CreateAssignment" className="ic-createAssign">
            Create New Assignment
          </Link>
          <br />
          <br />
          Exams:
          <table className="ih-table">
            <tr>
              <th className="ih-th">Exam Name</th>
              <th className="ih-th">Max Score</th>
              <th className="ih-th">Action</th>
            </tr>
            <tr>
              <td className="ih-td">
                <p>Quiz-1</p>
              </td>
              <td className="ih-td">
                <p>50</p>
              </td>
              <td className="ih-td">
                <a href="">
                  <Link to="/Instructor/editExam">Edit</Link>
                </a>{" "}
                |{" "}
                <a href="" className="ic-deleteButton">
                  Delete
                </a>
              </td>
            </tr>
            <tr>
              <td className="ih-td">
                <p>Mid Term</p>
              </td>
              <td className="ih-td">
                <p>100</p>
              </td>
              <td className="ih-td">
                <a href="">
                  <Link to="/Instructor/editExam">Edit</Link>
                </a>{" "}
                |{" "}
                <a href="" className="ic-deleteButton">
                  Delete
                </a>
              </td>
            </tr>
            <tr>
              <td className="ih-td">
                <p>Quiz-2</p>
              </td>
              <td className="ih-td">
                <p>50</p>
              </td>
              <td className="ih-td">
                <a href="">
                  <Link to="/Instructor/editExam">Edit</Link>
                </a>{" "}
                |{" "}
                <a href="" className="ic-deleteButton">
                  Delete
                </a>
              </td>
            </tr>
            <tr>
              <td className="ih-td">
                <p>Final Exam</p>
              </td>
              <td className="ih-td">
                <p>100</p>
              </td>
              <td className="ih-td">
                <a href="">
                  <Link to="/Instructor/editExam">Edit</Link>
                </a>{" "}
                |{" "}
                <a href="" className="ic-deleteButton">
                  Delete
                </a>
              </td>
            </tr>
          </table>
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
