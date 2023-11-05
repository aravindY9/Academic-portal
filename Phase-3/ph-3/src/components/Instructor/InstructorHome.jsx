import NavBar from "../UniversalComponents/NavBar";
import React, { useState, useEffect } from "react";

import "./InstructorStyle.css";
import { Link } from "react-router-dom";
import CreateTable from "./components/CreateTable";
// import "./AccountPage.css";
import TableEntries from "./components/TableEntries";
// import Header from './components/UniversalComponents/Header';

function App() {
  const [courseData, setCourseData] = useState([]);
  // const [error, setError] = useState(null);
  useEffect(() => {
    fetch("http://localhost/A/InstructorPHP/coursedata.php", {
      credentials: "include",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Response status is not 200: ${response.status}`);
        }
      })
      .then((data) => setCourseData(data))
      // .catch((error) => setError(error));
  }, []);
  // if (error) {
  //   // Handle the error condition, e.g., server is down
  //   return <div>Access Denied: Server is not responding.</div>;
  // }

  const deleteUser = (id) => {
    console.log(id);
    fetch(`http://localhost/A/InstructorPHP/deletecourse.php?id=${id}`)
      .then((response) => response.json())
      .then(() => {
        setCourseData(courseData.filter((data) => data.CODE !== id));
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="ih-mainBody">
      <NavBar x="instructorNav" />
      <br /><br />
      <div className="studentBody">
        <div className="welcomeMsg">
          Welcome to the <b>Instructor Hub</b>
        </div>
        <div>
            View Courses
            <CreateTable

              data={courseData.map(function mapentries(data) {
                return (
                  <TableEntries
                    nm={data.COURSE}
                    code={data.CODE}
                    rno={data.ROOMNUMBER}
                    time={data.DAY + ', ' + data.CLASSTIME}
                    dur={data.DURATION}
                    link={`Courses/${data.CODE}`}
                    deleteAccount={() => deleteUser(data.CODE)}
                  />
                );
              })}
            />
            {/* <a href="/admin/createcourse">
              <button className="createuser">Create Course</button>
            </a> */}
        </div>
       
        <div className="tempMargin"></div>
        <Link to="/Instructor/createCourse" className="ic-createAssign">
          {" "}
          Create New Course{" "}
        </Link>
        <br />
        <br />
        {/* <div className="studentLabel">Send Announcement:</div>

        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className="ih-txtarea"
          placeholder="Enter Message"
        ></textarea>
        <br />
        <button className="ih-publishButton">Publish</button> */}
      </div>
    </div>
  );
}

export default App;
