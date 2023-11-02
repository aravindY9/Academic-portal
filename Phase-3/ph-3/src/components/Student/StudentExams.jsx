import NavBar from "../UniversalComponents/NavBar";
import Table from "../UniversalComponents/Table";
import "./StudentExams.css";
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
          <b>Room: </b>NH100 <br /><br />
          <a href="" className="syllabus">Download Syllabus</a>
          <br /><br />
          Assignments:
          <Table x="assessmentTabStudent"/>
          <br />
          <div className="grades">
            Total Grade: <b>A</b>
          </div>
          <Table x="examTabStudent"/>
        </div>
      </div>
    </div>
  );
}

export default App;
