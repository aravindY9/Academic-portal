import NavBar from "../UniversalComponents/NavBar";
import "./StudentHome.css";
import { Link } from "react-router-dom";

// import Header from './components/UniversalComponents/Header';

function App() {
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
        <table className="student-home-table">
          <tr>
            <th className="student-home-th-td">Course</th>
            <th className="student-home-th-td">Course Code</th>
            <th className="student-home-th-td">Grades</th>
          </tr>
          <tr>
            <td className="student-home-th-td">
              <Link to="/student/StudentExams">Software Design Patterns</Link>
            </td>
            <td className="student-home-th-td">
              <p>CSE5363</p>
            </td>
            <td className="student-home-th-td">B</td>
          </tr>
          <tr>
            <td className="student-home-th-td">
              <Link to="/student/StudentExams">Cloud Computing</Link>
            </td>
            <td className="student-home-th-td">
              <p>CSE5332</p>
            </td>

            <td className="student-home-th-td">A</td>
          </tr>
          <tr>
            <td className="student-home-th-td">
              <Link to="/student/StudentExams">Machine Learning</Link>
            </td>
            <td className="student-home-th-td">
              <p>CSE6363</p>
            </td>

            <td className="student-home-th-td">A</td>
          </tr>
        </table>
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
