import NavBar from "../UniversalComponents/NavBar";
import Forms from "../UniversalComponents/Forms";
import "./InstructorStyle.css";
// import Header from './components/UniversalComponents/Header';

function App() {
  return (
    <div className="sfe-mainBody">
      <div className="pageFormat">
        <NavBar x="instructorNav" />
      </div>
      <br />
      <br />
      <div className="studentBody">
        Enter new exam details: <br />
        <input
          type="text"
          placeholder="Enter exam name"
          className="ice-input"
        />
        <br />
        <input
          type="text"
          placeholder="Enter course name"
          className="ice-input"
        />
        <br />
        <input
          type="number"
          placeholder="Enter max score"
          className="ice-input"
        /> <br />
        <input
          type="date"
          placeholder="Enter exam date"
          className="ice-input"
        />
        <br />
        <input
          type="text"
          placeholder="Enter room number"
          className="ice-input"
        />
        <br />
        <a href="" className="ic-createAssign">
          Create Exam
        </a>
      </div>
    </div>
  );
}

export default App;
