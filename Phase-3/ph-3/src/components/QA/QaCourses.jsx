import NavBar from "../UniversalComponents/NavBar";
import "../Student/StudentCourses.css"; 
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
// import Header from './components/UniversalComponents/Header';

function App() {
  const [userData, setUserData] = useState([
    {Coursename:"",	
      coursecode:"",	
      numberofstudents:"",	
      roomnumber:"",	
      totavggrades:"",	
      examname:"",	
      avggrades:""}
  ]);
  const [error, setError] = useState(null);
  useEffect(() => {
    // Fetch user data using the 'userId' parameter
    fetch(`http://localhost/QA/coursedata.php`, {
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
            setUserData(data);
        })
        .catch((error) => setError(error));
}, []);
if (error) {
  // Handle the error condition, e.g., server is down
  return <div>Access Denied: Server is not responding.</div>;
}
  return (
    <div className="stco-mainBody">
      <div className="pageFormat">
        <NavBar x="qanav" />
      </div>
      <br />
      <br />
      <div className="studentBody">
        <div className="stco-studentLabel">View All Courses:</div>
        {/* <input
          type="text"
          name="course-code"
          placeholder="Search course code (eg: CSE5301)"
          className="stco-searchCourse"
        />
        <button type="submit" class="stco-search-button">
          Search
        </button> */}
        <br />
        <div className="stco-tableScroll">
        <table className="ih-table">
            <tr>
              <th className="ih-th">Course</th>
              <th className="ih-th">Course Code</th>
              <th className="ih-th">Number of Students</th>
              <th className="ih-th">Room Number</th>
              <th className="ih-th">Avg Grades</th>
              <th className="ih-th">Action</th>
            </tr>
            {/* {console.log(userData)} */}
            {userData.map(function mapentries(data) {
              {/* console.log(data.Coursename); */}
                        return (
            <tr>
              <td className="ih-td">
              <>{data.Coursename}</>
              </td>
              <td className="ih-td">
                <p>{data.coursecode}</p>
              </td>
              <td className="ih-td">{data.numberofstudents}</td>
              <td className="ih-td">{data.roomnumber}</td>
              <td className="ih-td">{data.totavggrades}</td>
              <td className="ih-td">
                {" "}
                <Link to={`/qa/coursedetails/${data.coursecode}`} className="ic-ViewButton">
                  View
                </Link>
              </td>
            </tr>
            )})}
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
