import NavBar from "../UniversalComponents/NavBar";
import Forms from "../UniversalComponents/Forms";
import "./InstructorStyle.css";
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
        Enter new course details: <br />
        <input
          type="text"
          placeholder="Enter course name"
          className="ice-input"
        />
        <br />
        <input
          type="text"
          placeholder="Enter course code"
          className="ice-input"
        />
        <br />
        <input
          type="text"
          placeholder="Enter syllabus link"
          className="ice-input"
        /> <br />
        <input
          type="text"
          placeholder="Enter room number"
          className="ice-input"
        /> <br />
        <input
          type="text"
          placeholder="Enter time and date"
          className="ice-input"
        /> <br />
        <textarea name="" id="" cols="30" rows="10" className="ih-txtarea" placeholder="Enter course objectives"></textarea><br />
        
        <a href="" className="ic-createAssign">
          Create Course
        </a>
      </div>
    </div>
  );
}

export default App;
