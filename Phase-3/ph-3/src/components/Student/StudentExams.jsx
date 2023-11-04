import NavBar from "../UniversalComponents/NavBar";
import Table from "../UniversalComponents/Table";
import "./StudentExams.css";
// import Header from './components/UniversalComponents/Header';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams,useNavigate } from "react-router-dom";
function App() {
  const { courseID } = useParams();
  console.log(courseID);
  const [userData, setUserData] = useState([
    {Name:"",
      ID:"",
      Course:"",
      Grade:"",
      Quiz_1:"",
      Assignment_1:"",
      Quiz_2:"",
      Assignment_2:"",
      Project:""}
  ]);
  const [error, setError] = useState(null);
    // console.log("STD",studentId);
    useEffect(() => {
        // Fetch user data using the 'userId' parameter
        fetch(`http://localhost/student/fetchUserData.php`, {
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
                console.log("fdd",data);  
                setUserData(data[0]);
            })
            .catch((error) => setError(error));
    }, []);
    // console.log(studentId);
    if (error) {
      // Handle the error condition, e.g., server is down
      return <div>Access Denied: Server is not responding.</div>;
    }


  
    return <div> 
    <NavBar x="index"/>
    <div class="homepage-content">
    <div class="homepage-content-txt">
        {/* <select name="" id="" class="select-course">
            <option value="">Change Course</option>
            <option value="">CSE 5335</option>
            <option value="">CSE 5338</option>
            <option value="">CSE 6363</option>
        </select><br /> */}
          Course: {userData.Course+"E 5335"}
          <div class="sub-content-txt">
              <b>Student Name: </b> {userData.Name}
              <br /><b>Email: </b> {userData.Name}@mavs.uta.edu
              <br /><b>ID: </b>{userData.ID} <br /><br />
              <div class="performance-label">
                  <div class="perf"><b>Performance:</b></div>
                  <div class="grades">Total Grade: <b>{userData.Grade}</b></div>
              </div>
          </div>
          <table class="performance-table">
              <tr>
                  <th class="table-head">Exam</th>
                  <th class="table-head">Score</th>
              </tr>
              <tr>
                  <td class="table-row-1">Exam1</td>
                  <td class="table-row-1">{userData.Quiz_1}/100</td>
              </tr>
              <tr>
                  <td class="table-row-2">Exam2</td>
                  <td class="table-row-2">{userData.Quiz_2}/100</td>
              </tr>
              <tr>
                  <td class="table-row-1">Exam3</td>
                  <td class="table-row-1">{userData.Assignment_1}/100</td>
              </tr>
              <tr>
                  <td class="table-row-2">Exam4</td>
                  <td class="table-row-2">{userData.Assignment_2}/100</td>
              </tr>
          </table>
      </div>
  </div>
  </div>;
}

export default App;
