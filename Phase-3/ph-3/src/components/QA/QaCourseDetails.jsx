import NavBar from "../UniversalComponents/NavBar";
import Table from "../UniversalComponents/Table";
import "../Student/StudentExams.css";
import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
// import Header from './components/UniversalComponents/Header';

function App() {
  const { courseID } = useParams();
  // console.log(courseID);
  const [userData, setUserData] = useState([
    {Course:"",	
      coursecode:"",	
      numberofstudents:"",	
      roomnumber:"",	
      totavggrades:"",
    quiz1:"",
  assignment1:"",
  quiz2:"",
  assignment2:"",
  project:"",
instructorname:"",
instructormail:""}
  ]);
  const [error, setError] = useState(null);
  useEffect(() => {
    // Fetch user data using the 'userId' parameter
    fetch(`http://localhost/QA/fetchCourseData.php?id=${courseID}`, {
      credentials: 'include',
    })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`Response status is not 200: ${response.status}`);
      }
    })
        .then((data) => {
            // Set the fetched user data in the state
            // console.log(data[0]);
            setUserData(data[0]);
        })
        .catch((error) => setError(error))
}, [courseID]);


// console.log(userData);
if (error) {
  // Handle the error condition, e.g., server is down
  return <div>Access Denied: Server is not responding.</div>;
}
  return (
    <div className="mainBody">
      <div className="pageFormat">
        <NavBar x="qanav" />
      </div>
      <br />
      <br />
      <div className="studentBody">
        {/* <select name="" id="" className="selectCourse">
          <option value="">Change Course</option>
          <option value="">CSE 5335</option>
          <option value="">CSE 5338</option>
          <option value="">CSE 6363</option>
        </select>
        <br /> */}
        Course: {userData.coursecode}
        <div className="subContentTxt">
          {userData.Coursename}
          <br />
          <b>Instructor: </b> {userData.Instructorname}
          <br />
          <b>Email: </b> {userData.Instructormail}
          <br />
          <b>Room: </b>{userData.roomnumber} <br />
          <br />
          {/* <a href="" className="syllabus">
            Download Syllabus
          </a> */}
          {/* <br /><br />
          Assignments:
          <Table x="assessmentTabStudent"/> */}
          
          
          {/* <div className="grades">
            Total Grade: <b>A</b>
          </div> */}
          <table className="t-table">
            <tr>
              <th className="t-th">Exam Name</th>
              <th className="t-th">Average Grade</th>
            </tr>
            <tr>
              <td className="t-td">
                <p>Quiz-1</p>
              </td>
              <td className="t-td">
                <p>{userData.quiz1}</p>
              </td>
            </tr>
            <tr>
              <td className="t-td">
                <p>Assignment-1</p>
              </td>
              <td className="t-td">
                <p>{userData.assignment1}</p>
              </td>
            </tr>
            <tr>
              <td className="t-td">
                <p>Quiz-2</p>
              </td>
              <td className="t-td">
                <p>{userData.quiz2}</p>
              </td>
            </tr>
            <tr>
              <td className="t-td">
                <p>Assignment-2</p>
              </td>
              <td className="t-td">
                <p>{userData.assignment2}</p>
              </td>
            </tr>
            <tr>
              <td className="t-td">
                <p>Project</p>
              </td>
              <td className="t-td">
                <p>{userData.project}</p>
              </td>
            </tr>
          </table><br />
          Provide Feedback: <br />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="ih-txtarea"
            placeholder="Enter Feedback"
          ></textarea>
          <br />
          <a href="" className="ic-createAssign">
            Submit Feedback
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
