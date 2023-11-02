import NavBar from "../UniversalComponents/NavBar";
import "./InstructorStyle.css";
import { Link } from "react-router-dom";
// import Header from './components/UniversalComponents/Header';

function App() {
  return (
    <div className="ih-mainBody">
      <div className="pageFormat">
        <NavBar x="program" />
      </div>
      <br />
      <br />
      <div className="studentBody">
        <div className="welcomeMsg">
          Welcome to the <b>Program Coordinator Hub</b>
        </div>
        <table className="ih-table">
          <tr>
            <th className="ih-th">Course</th>
            <th className="ih-th">Course Code</th>
            <th className="ih-th">Number of Students</th>
            <th className="ih-th">Room Number</th>
            <th className="ih-th">Avg Grades</th>
          </tr>
          <tr>
            <td className="ih-td">
            Software Design Patterns
            </td>
            <td className="ih-td">
              <p>CSE5363</p>
            </td>
            <td className="ih-td">62</td>
            <td className="ih-td">NH100</td>
            <td className="ih-td">92.22%</td>
            
          </tr>
          <tr>
            <td className="ih-td">
            Cloud Computing
            </td>
            <td className="ih-td">
              <p>CSE5332</p>
            </td>
            <td className="ih-td">50</td>
            <td className="ih-td">ERB107</td>
            <td className="ih-td">87.23%</td>
            
          </tr>
          <tr>
            <td className="ih-td">
            Machine Learning
            </td>
            <td className="ih-td">
              <p>CSE6363</p>
            </td>
            <td className="ih-td">76</td>
            <td className="ih-td">SC203</td>
            <td className="ih-td">90.29%</td>
            
          </tr>
          <tr>
            <td className="ih-td">
            Artificial Intelligence - 1
            </td>
            <td className="ih-td">
              <p>CSE6847</p>
            </td>
            <td className="ih-td">98</td>
            <td className="ih-td">SH212</td>
            <td className="ih-td">89.25%</td>
            
          </tr>
          <tr>
            <td className="ih-td">
            Artificial Intelligence - 2
            </td>
            <td className="ih-td">
              <p>CSE6587</p>
            </td>
            <td className="ih-td">96</td>
            <td className="ih-td">PK302</td>
            <td className="ih-td">96.58%</td>
            
          </tr>

        </table>
        <div className="tempMargin"></div>
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
