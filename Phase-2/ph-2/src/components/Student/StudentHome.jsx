import NavBar from "../UniversalComponents/NavBar";
import "./StudentHome.css";
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
        <table>
          <tr>
            <th>Course</th>
            <th>Course Code</th>
            <th>Assignments</th>
            <th>Grades</th>
          </tr>
          <tr>
            <td>
              <a href="">Software Design Patterns</a>
            </td>
            <td>
              <p>CSE5363</p>
            </td>
            <td>
              <a href="">view</a>
            </td>
            <td>
              <a href="">view</a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="">Cloud Computing</a>
            </td>
            <td>
              <p>CSE5332</p>
            </td>
            <td>
              <a href="">view</a>
            </td>
            <td>
              <a href="">view</a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="">Machine Learning</a>
            </td>
            <td>
              <p>CSE6363</p>
            </td>
            <td>
              <a href="">view</a>
            </td>
            <td>
              <a href="">view</a>
            </td>
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
