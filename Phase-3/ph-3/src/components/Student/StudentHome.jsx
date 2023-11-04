import NavBar from "../UniversalComponents/NavBar";
import "./StudentHome.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import CreateTable from "./components/CreateTable";
// import "./AccountPage.css";
import TableEntries from "./components/TableEntries";
// import Header from './components/UniversalComponents/Header';

function App() {
  const [courseData, setCourseData] = useState([]);
  // const [error, setError] = useState(null);
  useEffect(() => {
    fetch("http://localhost/student/coursedata.php", {
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
  console.log(courseData);
  return (
    <div className="mainBody">
      <div className="pageFormat">
        <NavBar x="indexNav" />
      </div>
      <br />
      <br />
      <div className="studentBody">
        <div className="welcomeMsg">
          Welcome to the <b>Student Hub</b>
        </div>
        <div className="studentLabel">My Courses:</div>
        <div>
        <CreateTable

              data={courseData.map(function mapentries(data) {
                return (
                  <TableEntries
                    nm={data.COURSE}
                    code={data.CODE}
                    rno={data.ROOMNUMBER}
                    time={data.DAY + ', ' + data.CLASSTIME}
                    dur={data.DURATION}
                    link={`StudentExams/${data.CODE}`}
                  />
                );
              })}
            />
        </div>
    
        <div class="course-obj">
          Course Objectives:
          <div class="course-obj-txt">
            <ul>
              <li>
                Introduction to Computer Science: Understand the fundamental
                concepts and principles of computer science. Learn the basics of
                programming and algorithm design. Develop problem-solving skills
                using computational methods.
              </li>
              <br />

              <li>
                Data Structures and Algorithms: Master various data structures
                such as arrays, linked lists, stacks, and queues. Analyze and
                implement efficient algorithms for sorting, searching, and data
                manipulation. Apply data structures and algorithms to solve
                real-world computing problems.
              </li>
              <br />
              <li>
                Programming Languages and Paradigms: Explore different
                programming languages and paradigms. Develop proficiency in at
                least one high-level programming language. Understand the
                strengths and weaknesses of different programming approaches.
              </li>
              <br />
              <li>
                Database Management Systems: Learn the principles of database
                design and normalization. Gain expertise in using relational
                database management systems (RDBMS). Develop skills in SQL for
                data querying and manipulation.
              </li>
            </ul>
          </div>
          <br />
          Student performance Measure:
          <div class="course-obj-txt">
            <ul>
              <li>
                Introduction to Computer Science: Understand the fundamental
                concepts and principles of computer science. Learn the basics of
                programming and algorithm design. Develop problem-solving skills
                using computational methods.
              </li>
              <br />

              <li>
                Data Structures and Algorithms: Master various data structures
                such as arrays, linked lists, stacks, and queues. Analyze and
                implement efficient algorithms for sorting, searching, and data
                manipulation. Apply data structures and algorithms to solve
                real-world computing problems.
              </li>
              <br />
              <li>
                Programming Languages and Paradigms: Explore different
                programming languages and paradigms. Develop proficiency in at
                least one high-level programming language. Understand the
                strengths and weaknesses of different programming approaches.
              </li>
              <br />
              <li>
                Database Management Systems: Learn the principles of database
                design and normalization. Gain expertise in using relational
                database management systems (RDBMS). Develop skills in SQL for
                data querying and manipulation.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
