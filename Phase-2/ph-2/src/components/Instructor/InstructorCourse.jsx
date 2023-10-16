import NavBar from "../UniversalComponents/NavBar";
import Table from "../UniversalComponents/Table";
import "./InstructorStyle.css";
import { Link } from "react-router-dom";
// import Header from './components/UniversalComponents/Header';

function App() {
  return (
    <div className="mainBody">
      <div className="pageFormat">
        <NavBar x="instructorNav" />
      </div>
      <br />
      <br />
      <div className="studentBody">
        Course: CSE 5338
        <div className="subContentTxt">
          Information Security-1
          <br />
          <b>Number of Students: </b>63 <br />
          <b>Average Grades: </b>90.22% <br />
          <b>Room: </b>NH100 <br />
          <br />
          <input type="text" className="ice-input" placeholder="Enter new syllabus link"/> 
          <br />
          <a href="" className="ic-createAssign">
            Edit Syllabus
          </a>
          <br />
          <br />
          Assignments:
          <table>
            <tr>
              <th>Assessment Name</th>
              <th>Description</th>
              <th>Due Date</th>
              <th>Score</th>
              <th>Actions</th>
            </tr>
            <tr>
              <td>
                <p>Assignment 1</p>
              </td>
              <td>
                <p>Sorting</p>
              </td>
              <td>
                <p>09/30/2023</p>
              </td>
              <td>
                <p>100</p>
              </td>
              <td>
                <a href=""><Link to ="/Instructor/editAssignment">Edit</Link></a> |{" "}
                <a href="" className="ic-deleteButton">
                  Delete
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <p>Assignment 2</p>
              </td>
              <td>
                <p>Data Cleaning</p>
              </td>
              <td>
                <p>10/5/2023</p>
              </td>
              <td>
                <p>100</p>
              </td>
              <td>
                <a href=""><Link to ="/Instructor/editAssignment">Edit</Link></a> |{" "}
                <a href="" className="ic-deleteButton">
                  Delete
                </a>
              </td>
            </tr>
          </table>
          <div className="tempMargin"></div>
          <a href="" className="ic-createAssign">
            Create New Assignment
          </a>
          <br />
          <br />
          <div className="grades">Exams:</div>
          <table>
            <tr>
              <th>Exam Name</th>
              <th>Max Score</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>
                <p>Quiz-1</p>
              </td>
              <td>
                <p>50</p>
              </td>
              <td>
                <a href=""><Link to ="/Instructor/editAssignment">Edit</Link></a> |{" "}
                <a href="" className="ic-deleteButton">
                  Delete
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <p>Mid Term</p>
              </td>
              <td>
                <p>100</p>
              </td>
              <td>
                <a href=""><Link to ="/Instructor/editAssignment">Edit</Link></a> |{" "}
                <a href="" className="ic-deleteButton">
                  Delete
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <p>Quiz-2</p>
              </td>
              <td>
                <p>50</p>
              </td>
              <td>
                <a href=""><Link to ="/Instructor/editAssignment">Edit</Link></a> |{" "}
                <a href="" className="ic-deleteButton">
                  Delete
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <p>Final Exam</p>
              </td>
              <td>
                <p>100</p>
              </td>
              <td>
                <a href=""><Link to ="/Instructor/editAssignment">Edit</Link></a> |{" "}
                <a href="" className="ic-deleteButton">
                  Delete
                </a>
              </td>
            </tr>
          </table>
          <div className="tempMargin"></div>
          <a href="" className="ic-createAssign">
            Create New Exam
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
