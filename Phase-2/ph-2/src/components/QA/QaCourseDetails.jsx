import NavBar from "../UniversalComponents/NavBar";
import Table from "../UniversalComponents/Table";
import "../Student/StudentExams.css";
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
        <select name="" id="" className="selectCourse">
          <option value="">Change Course</option>
          <option value="">CSE 5335</option>
          <option value="">CSE 5338</option>
          <option value="">CSE 6363</option>
        </select>
        <br />
        Course: CSE 5338
        <div className="subContentTxt">
          Information Security-1
          <br />
          <b>Instructor: </b> Liam Wilosn
          <br />
          <b>Email: </b> lsw2341@mavs.uta.edu
          <br />
          <b>Room: </b>NH100 <br />
          <br />
          <a href="" className="syllabus">
            Download Syllabus
          </a>
          {/* <br /><br />
          Assignments:
          <Table x="assessmentTabStudent"/> */}
          <br />
          <br />
          <div className="grades">
            Total Grade: <b>A</b>
          </div>
          <table className="t-table">
            <tr>
              <th className="t-th">Exam Name</th>
              <th className="t-th">Average Grade</th>
            </tr>
            <tr>
              <td className="t-td">
                <p>Quiz-1</p>
              </td>
              <td className="t-td">
                <p>80.25/100</p>
              </td>
            </tr>
            <tr>
              <td className="t-td">
                <p>Assignment-1</p>
              </td>
              <td className="t-td">
                <p>85.21/100</p>
              </td>
            </tr>
            <tr>
              <td className="t-td">
                <p>Quiz-2</p>
              </td>
              <td className="t-td">
                <p>85.53/100</p>
              </td>
            </tr>
            <tr>
              <td className="t-td">
                <p>Assignment-2</p>
              </td>
              <td className="t-td">
                <p>90.02/100</p>
              </td>
            </tr>
            <tr>
              <td className="t-td">
                <p>Project</p>
              </td>
              <td className="t-td">
                <p>92.01/100</p>
              </td>
            </tr>
          </table><br />
          Provide Feedback: <br />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="ih-txtarea"
            placeholder="Enter Feedback"
          ></textarea>
          <br />
          <a href="" className="ic-createAssign">
            Submit Feedback
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
