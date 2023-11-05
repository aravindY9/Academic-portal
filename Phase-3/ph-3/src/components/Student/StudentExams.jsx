import NavBar from "../UniversalComponents/NavBar";
import Table from "../UniversalComponents/Table";
import "./StudentExams.css";
// import Header from './components/UniversalComponents/Header';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams,useNavigate } from "react-router-dom";
function App() {
  const { courseID } = useParams();
  // console.log(courseID);
  const [userData, setUserData] = useState([
    {Name:"",
      StudentID:"",
      Course:"",
      Grade:"",
      Quiz_1:"",
      Assignment_1:"",
      Quiz_2:"",
      Assignment_2:"",
      Project:""}
  ]);

  const [grades,setgrades] = useState([{

  }]);

  const [error, setError] = useState(null);
    // console.log("STD",studentId);
    useEffect(() => {
        // Fetch user data using the 'userId' parameter
        fetch(`http://localhost/A/student/fetchUserData.php`, {
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
                // console.log("fdd",data);  
                setUserData(data[0]);
            })
            .catch((error) => setError(error));
    }, []);
    // console.log(studentId);
    // if (error) {
    //   console.log(error);
    //   // Handle the error condition, e.g., server is down
    //   return <div>Access Denied: Server is not responding.</div>;
    // }

    fetch(`http://localhost/A/student/studentgrades.php?id=${userData.StudentID}`, {
      method:"POST",
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
                // console.log("fdd",data);  
                setgrades(data);
            })
            .catch((error) => console.log(error));
    
  
    return <div> 
    <NavBar x="indexNav"/>
    <div class="homepage-content">
    <div class="homepage-content-txt">
        {/* <select name="" id="" class="select-course">
            <option value="">Change Course</option>
            <option value="">CSE 5335</option>
            <option value="">CSE 5338</option>
            <option value="">CSE 6363</option>
        </select><br /> */}
          Course: {courseID}
          <div class="sub-content-txt">
              <b>Student Name: </b> {userData.Name}
              <br /><b>Email: </b> {userData.Name}@mavs.uta.edu
              <br /><b>ID: </b>{userData.StudentID} <br /><br />
              <div class="performance-label">
                  <div class="perf"><b>Performance:</b></div>
              </div>
          </div>
          <table class="performance-table">
              <tr>
                  <th class="table-head">Exam</th>
                  <th class="table-head">Score</th>
              </tr>
              {grades.map((data)=>{
                return <tr>
                  <td class="table-row-1">{data.examName}</td>
                  <td class="table-row-1">{data.Grade}/100</td>
              </tr>
              })}
              
          </table>
      </div>
  </div>
  </div>;
}

export default App;
