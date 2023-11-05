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
  const [feedbackData, setFeedbackData] = useState([{}])
  useEffect(() => {
    // Fetch user data using the 'userId' parameter
    fetch(`http://localhost/A/QA/fetchCourseData.php?id=${courseID}`, {
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
            console.log(data);
            setUserData(data[0]);
        })
        .catch((error) => setError(error))
}, [courseID]);


// console.log(userData);
if (error) {
  // Handle the error condition, e.g., server is down
  // console.log(error);
  return <div>Access Denied: Server is not responding.</div>;
}
const upload = () => {
  const updatedfeedbackData = {
    ID: feedbackData.ID,
    FEEDBACK: feedbackData.FEEDBACK,
  };
  console.log(JSON.stringify(feedbackData));
  fetch(`http://localhost/InstructorPHP/createfeedback.php`, {
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
        Course: {userData.CODE}
        <div className="subContentTxt">
          {userData.COURSE}
          <br />
          <b>InstructorID: </b> {userData.INSTRUCTORID}
          <br />
          <b>Room: </b>{userData.ROOMNUMBER} <br />
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
                <p>92</p>
              </td>
            </tr>
            <tr>
              <td className="t-td">
                <p>Assignment-1</p>
              </td>
              <td className="t-td">
                <p>90</p>
              </td>
            </tr>
            <tr>
              <td className="t-td">
                <p>Quiz-2</p>
              </td>
              <td className="t-td">
                <p>87</p>
              </td>
            </tr>
            <tr>
              <td className="t-td">
                <p>Assignment-2</p>
              </td>
              <td className="t-td">
                <p>75</p>
              </td>
            </tr>
            <tr>
              <td className="t-td">
                <p>Project</p>
              </td>
              <td className="t-td">
                <p>92</p>
              </td>
            </tr>
          </table><br />
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
