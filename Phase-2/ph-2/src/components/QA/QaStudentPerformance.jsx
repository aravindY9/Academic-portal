import NavBar from "../UniversalComponents/NavBar";
import Table from "../UniversalComponents/Table";
import "../Instructor/InstructorStyle.css";
import { Link } from "react-router-dom";
// import Header from './components/UniversalComponents/Header';

function App() {
  return (
    <div className="mainBody">
      <div className="pageFormat">
        <NavBar x="qanav" />
      </div>
      <br />
      <br />
      <div className="studentBody">
        Course: CSE 5338
        <div className="subContentTxt">
          Information Security-1
          <br />
          <b>Student Name: </b> Adam John
          <br />
          <b>Email: </b> afj2341@mavs.uta.edu
          <br />
          <b>StudentID: </b>1002673456
          <br />
          <br />
          <div className="grades">
            Total Grade: <b>A</b>
          </div>
          <table className="ih-table">
            <tr>
              <th className="ih-th">Exam Name</th>
              <th className="ih-th">Grade</th>
            </tr>
            <tr>
              <td className="ih-td">
                <p>Quiz-1</p>
              </td>
              <td className="ih-td">
                <p>80/100</p>
              </td>
            </tr>
            <tr>
              <td className="ih-td">
                <p>Assignment-1</p>
              </td>
              <td className="ih-td">
                <p>85/100</p>
              </td>

            </tr>
            <tr>
              <td className="ih-td">
                <p>Quiz-2</p>
              </td>
              <td className="ih-td">
                <p>85/100</p>
              </td>

            </tr>
            <tr>
              <td className="ih-td">
                <p>Assignment-2</p>
              </td>
              <td className="ih-td">
                <p>87/100</p>
              </td>

            </tr>
            <tr>
              <td className="ih-td">
                <p>Project</p>
              </td>
              <td className="ih-td">
                <p>78/100</p>
              </td>

            </tr>
          </table>
          <br />
          Provide Feedback: <br />
          <textarea name="" id="" cols="30" rows="10" className="ih-txtarea" placeholder="Enter Feedback"></textarea><br />
          <a href="" className="ic-createAssign">
            Submit Feedback
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
