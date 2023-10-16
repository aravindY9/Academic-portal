import NavBar from "../UniversalComponents/NavBar";
import "./InstructorStyle.css";
import { Link } from "react-router-dom";
// import Header from './components/UniversalComponents/Header';

function App() {
  return (
    <div className="ih-mainBody">
      <div className="pageFormat">
        <NavBar x="instructorNav" />
      </div>
      <br />
      <br />
      <div className="studentBody">
        <div className="welcomeMsg">
          Welcome to the <b>Instructor Hub</b>
        </div>
        <table className="ih-table">
          <tr>
            <th className="ih-th">Course</th>
            <th className="ih-th">Course Code</th>
            <th className="ih-th">Number of Students</th>
            <th className="ih-th">Room Number</th>
            <th className="ih-th">Avg Grades</th>
            <th className="ih-th">Action</th>
          </tr>
          <tr>
            <td className="ih-td">
            <Link to="/Instructor/Courses">Software Design Patterns</Link>
            </td>
            <td className="ih-td">
              <p>CSE5363</p>
            </td>
            <td className="ih-td">62</td>
            <td className="ih-td">NH100</td>
            <td className="ih-td">92.22%</td>
            <td className="ih-td">
              {" "}
              <a href="" className="ic-deleteButton">
                Delete
              </a>
            </td>
          </tr>
          <tr>
            <td className="ih-td">
            <Link to="/Instructor/Courses">Cloud Computing</Link>
            </td>
            <td className="ih-td">
              <p>CSE5332</p>
            </td>
            <td className="ih-td">50</td>
            <td className="ih-td">ERB107</td>
            <td className="ih-td">87.23%</td>
            <td className="ih-td">
              {" "}
              <a href="" className="ic-deleteButton">
                Delete
              </a>
            </td>
          </tr>
          <tr>
            <td className="ih-td">
            <Link to="/Instructor/Courses">Machine Learning</Link>
            </td>
            <td className="ih-td">
              <p>CSE6363</p>
            </td>
            <td className="ih-td">76</td>
            <td className="ih-td">SC203</td>
            <td className="ih-td">90.29%</td>
            <td className="ih-td">
              {" "}
              <a href="" className="ic-deleteButton">
                Delete
              </a>
            </td>
          </tr>
        </table>
        <div className="tempMargin"></div>
          <Link to="/Instructor/createCourse" className="ic-createAssign"> Create New Course </Link>
        <br />
        <br />
        <div className="studentLabel">Send Announcement:</div>

        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className="ih-txtarea"
          placeholder="Enter Message"
        ></textarea>
        <br />
        <button className="ih-publishButton">Publish</button>
      </div>
    </div>
  );
}

export default App;
